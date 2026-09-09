const fs = require('fs');
const path = require('path');

function write(filePath, content) {
  const dir = path.dirname(filePath);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(filePath, content.trim() + '\n', 'utf8');
  console.log('Created: ' + filePath);
}

// 1. DOCKER & COMPOSE
write('infrastructure/docker/docker-compose.yml', `
version: '3.9'

services:
  postgres:
    image: postgres:16-alpine
    container_name: nexora-postgres
    environment:
      POSTGRES_USER: nexora
      POSTGRES_PASSWORD: nexora_password
      POSTGRES_DB: nexora_enterprise
    ports:
      - "5432:5432"
    volumes:
      - pgdata:/var/lib/postgresql/data
    healthcheck:
      test: ["CMD-SHELL", "pg_isready -U nexora -d nexora_enterprise"]
      interval: 10s
      timeout: 5s
      retries: 5

  redis:
    image: redis:7-alpine
    container_name: nexora-redis
    ports:
      - "6379:6379"
    volumes:
      - redisdata:/data

  minio:
    image: minio/minio:RELEASE.2024-05-10T01-41-38Z
    container_name: nexora-minio
    environment:
      MINIO_ROOT_USER: nexora_storage
      MINIO_ROOT_PASSWORD: nexora_storage_key
    ports:
      - "9000:9000"
      - "9001:9001"
    command: server /data --console-address ":9001"

  api-gateway:
    build:
      context: ../..
      dockerfile: services/api-gateway/Dockerfile
    container_name: nexora-api-gateway
    ports:
      - "4000:4000"
    environment:
      PORT: 4000
      DATABASE_URL: "postgresql://nexora:nexora_password@postgres:5432/nexora_enterprise"
      REDIS_URL: "redis://redis:6379"
    depends_on:
      postgres:
        condition: service_healthy

  web:
    build:
      context: ../..
      dockerfile: apps/web/Dockerfile
    container_name: nexora-web
    ports:
      - "3000:3000"
    environment:
      NEXT_PUBLIC_API_URL: "http://localhost:4000/api/v1"

volumes:
  pgdata:
  redisdata:
`);

write('services/api-gateway/Dockerfile', `
FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json tsconfig.base.json ./
COPY packages/ ./packages/
COPY services/api-gateway/ ./services/api-gateway/
RUN npm install
CMD ["node", "services/api-gateway/src/server.ts"]
`);

write('apps/web/Dockerfile', `
FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
COPY apps/web/ ./apps/web/
RUN npm install
CMD ["npm", "run", "dev", "--workspace=@nexora/web"]
`);

// 2. KUBERNETES MANIFESTS
write('infrastructure/k8s/deployment-gateway.yaml', `
apiVersion: apps/v1
kind: Deployment
metadata:
  name: nexora-api-gateway
  namespace: nexora-prod
  labels:
    app: nexora-api-gateway
spec:
  replicas: 3
  selector:
    matchLabels:
      app: nexora-api-gateway
  template:
    metadata:
      labels:
        app: nexora-api-gateway
    spec:
      containers:
        - name: gateway
          image: nexora/api-gateway:2.4.0
          ports:
            - containerPort: 4000
          resources:
            requests:
              cpu: "250m"
              memory: "512Mi"
            limits:
              cpu: "1000m"
              memory: "1536Mi"
          readinessProbe:
            httpGet:
              path: /health
              port: 4000
            initialDelaySeconds: 5
            periodSeconds: 10
`);

write('infrastructure/k8s/ingress.yaml', `
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: nexora-ingress
  namespace: nexora-prod
  annotations:
    kubernetes.io/ingress.class: nginx
    cert-manager.io/cluster-issuer: letsencrypt-prod
spec:
  tls:
    - hosts:
        - app.nexora.io
        - api.nexora.io
      secretName: nexora-tls
  rules:
    - host: app.nexora.io
      http:
        paths:
          - path: /
            pathType: Prefix
            backend:
              service:
                name: nexora-web
                port:
                  number: 3000
    - host: api.nexora.io
      http:
        paths:
          - path: /
            pathType: Prefix
            backend:
              service:
                name: nexora-api-gateway
                port:
                  number: 4000
`);

// 3. HELM CHART
write('infrastructure/helm/Chart.yaml', `
apiVersion: v2
name: nexora-enterprise
description: Production Helm Chart for NEXORA Enterprise Operations Platform
type: application
version: 2.4.0
appVersion: "2.4.0"
`);

write('infrastructure/helm/values.yaml', `
global:
  environment: production
  domain: nexora.io

apiGateway:
  replicaCount: 3
  image:
    repository: nexora/api-gateway
    tag: 2.4.0
  service:
    type: ClusterIP
    port: 4000

web:
  replicaCount: 2
  image:
    repository: nexora/web
    tag: 2.4.0
  service:
    type: ClusterIP
    port: 3000

postgresql:
  enabled: true
  auth:
    database: nexora_enterprise
    username: nexora
`);

// 4. TERRAFORM
write('infrastructure/terraform/main.tf', `
terraform {
  required_version = ">= 1.5.0"
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.0"
    }
  }
}

provider "aws" {
  region = var.aws_region
}

resource "aws_vpc" "nexora_vpc" {
  cidr_block           = "10.0.0.0/16"
  enable_dns_hostnames = true
  enable_dns_support   = true

  tags = {
    Name        = "nexora-enterprise-vpc"
    Environment = "production"
  }
}
`);

// 5. CI/CD WORKFLOWS
write('.github/workflows/ci.yml', `
name: NEXORA Enterprise CI/CD Pipeline

on:
  push:
    branches: [main, develop]
  pull_request:
    branches: [main]

jobs:
  audit-and-test:
    name: Code Quality & Deduplication Gate
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: 20
      - name: Run Duplicate Code Gate
        run: node tools/audit/dedup-gate.js
      - name: Run Master LOC Accounting
        run: node tools/audit/loc-audit.js
      - name: Execute Monorepo Tests
        run: npm run test --if-present
`);

console.log('Infrastructure and DevOps files built successfully.');
