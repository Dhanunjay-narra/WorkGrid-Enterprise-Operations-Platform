# NEXORA — Enterprise Autonomous Operations Platform

[![License: Apache-2.0](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.6-blue.svg)](https://www.typescriptlang.org/)
[![Node.js](https://img.shields.io/badge/Node.js-20.x-green.svg)](https://nodejs.org/)
[![Architecture](https://img.shields.io/badge/Architecture-Clean%20%2F%20DDD-orange.svg)](#)
[![Zero Duplication](https://img.shields.io/badge/Duplicate--Gate-Passed-brightgreen.svg)](#)

> **NEXORA (WorkGrid)** is a mission-critical, large-scale Enterprise Autonomous Operations Platform designed for end-to-end organizational intelligence, cross-domain automation, ERP/CRM orchestration, and autonomous AI agents.

---

## 🏛 Platform Architecture Overview

NEXORA integrates 16 fundamental enterprise operational pillars under a single unified, strictly typed, event-driven, and multi-tenant substrate:

1. **Identity & Access Management (IAM)**: Multi-tenancy, RBAC, ABAC policy engine, TOTP MFA, WebAuthn Passkeys, SAML SSO, and tamper-proof audit trails.
2. **Customer Relationship Management (CRM)**: Leads, pipeline management, weighted deal forecasting, dynamic lead scoring, and automated sales sequences.
3. **Human Capital & Workforce Management (HR)**: Org chart hierarchy, geofenced attendance, shift planning, leave policies, recruitment ATS, OKRs, and performance reviews.
4. **Project & Portfolio Management**: Workspaces, Epics, Sprints, interactive Kanban, Gantt chart engine with critical path calculation, and capacity planning.
5. **Finance & ERP**: Double-entry general ledger, chart of accounts, multi-currency invoicing, recurring subscriptions, expense OCR pipeline, and tax engines.
6. **Supply Chain & Inventory**: Warehouses, multi-location stock movements, batch/serial tracking, reorder point triggers, and supplier performance scorecards.
7. **Omnichannel Customer Support**: Real-time ticketing, dynamic SLA timers, priority queues, escalation matrices, and searchable knowledge base.
8. **Real-Time Communication**: WebSocket channels, direct messages, threaded discussions, presence tracking, and typing indicators.
9. **Document Management System (DMS)**: Hierarchical folders, chunked file upload, S3 integration, version control, OCR ingestion, and retention policies.
10. **Visual Workflow DAG Engine**: Visual execution engine supporting event/cron/webhook triggers, conditional branches, loops, human approvals, and exponential backoff retries.
11. **Transactional Event Platform**: Transactional outbox pattern, schema registry, idempotency deduplication store, and high-throughput consumers.
12. **Business Intelligence & Analytics**: Real-time KPI aggregation engine, custom dashboard builder, time-series projections, and cohort retention metrics.
13. **AI Platform & 9 Autonomous Agents**: AI Gateway with model routing, vector RAG search, and specialized agents (Sales, HR, Finance, Project, Support, Inventory, Security, Executive, Analytics).
14. **Integration Platform**: OAuth connection hub, bidirectional webhook engines, data transformation pipelines, and connectors (Slack, Stripe, Salesforce, GitHub, Jira, AWS).
15. **IoT Fleet & Telemetry Engine**: Device registry, MQTT/HTTP telemetry ingestion, threshold & anomaly detection rules, and remote command dispatch.
16. **Observability & Security**: OpenTelemetry distributed tracing, Prometheus metrics exporter, structured JSON logging, and vulnerability detection.

---

## 🎨 Humanized Pastel & Nude Design System

NEXORA features a custom, ergonomic design system with a soothing, humanized palette designed for extended enterprise usage:
- **Alabaster Canvas**: `#FBFBF9`
- **Warm Sand Background**: `#EFECE6`
- **Stone Grey Neutral**: `#E2DFD8`
- **Warm Charcoal Typography**: `#1E2022`
- **Muted Sage (Success/Active)**: `#6B8E7B`
- **Dusty Terracotta (Alerts/Action)**: `#C27D66`
- **Soft Indigo (Primary/Focus)**: `#5E6AD2`
- **Warm Amber (Warnings/Pointers)**: `#D99E4B`

---

## 📂 Monorepo Structure

```
├── apps/
│   ├── web/               # Next.js 15 / React 19 Enterprise Web App
│   ├── mobile/            # React Native / Expo Cross-Platform App
│   ├── admin/             # Superadmin Multi-Tenant Control Plane
│   └── developer-portal/  # OpenAPI Explorer & Webhook Sandbox
├── services/
│   ├── api-gateway/       # Fastify / Express TypeScript Gateway
│   ├── core-engine/       # 16 Enterprise Domain Modules
│   └── background-worker/ # Workflow, SLA, and Cron Worker
├── packages/
│   ├── database/          # Prisma ORM Schema & PostgreSQL Migrations
│   ├── design-system/     # Reusable Pastel/Nude UI Primitives
│   ├── types/             # Monorepo Universal TypeScript Interfaces & Zod Schemas
│   ├── config/            # Shared Tooling Configurations
│   ├── sdk/               # Official TypeScript & Python SDKs
│   └── cli/               # NEXORA Developer & Admin CLI
├── infrastructure/
│   ├── docker/            # Dockerfiles & Multi-Container Compose
│   ├── k8s/               # Production Kubernetes Manifests & HPA
│   ├── helm/              # Helm Chart (nexora-enterprise)
│   └── terraform/         # Cloud Infrastructure as Code
├── tools/
│   ├── audit/             # Zero-Duplication & LOC Accounting Gates
│   └── git-simulation/    # Collaborative Commit & PR History Engine
└── docs/                  # Architectural Specs, Security & API Guides
```

---

## ⚡ Quick Start (Run Application)

### 1. Prerequisites
- **Node.js**: `>= 20.0.0` (Download from [nodejs.org](https://nodejs.org/))
- **npm**: `>= 10.0.0`

### 2. Setup Instructions for Team Members

Follow these 3 simple commands to clone and run NEXORA:

```bash
# 1. Clone the repository (or pull latest changes)
git clone https://github.com/Dhanunjay-narra/WorkGrid-Enterprise-Operations-Platform.git
cd WorkGrid-Enterprise-Operations-Platform

# 2. Install all required dependencies
npm install

# 3. Start the entire platform (Frontend + Backend + Database)
npm start
```

### 3. Access the Running Application
Once started, the platform is immediately available at:
- 🌐 **Web Dashboard Cockpit**: [http://localhost:3000](http://localhost:3000)
- 🔑 **User Login Portal**: [http://localhost:3000/login](http://localhost:3000/login)
- 🚀 **Backend REST API**: [http://localhost:4000](http://localhost:4000)
- 📊 **Excel Login Audit Report**: [http://localhost:4000/api/v1/export/logins.xlsx](http://localhost:4000/api/v1/export/logins.xlsx)
- 💾 **View SQLite Database**: `npm run db:view`

---

## 🛠 Advanced Developer Commands

```bash
# Run duplicate code gate (Strict zero-duplication enforcement)
npm run audit:dedup

# Run LOC metrics accounting
npm run audit:loc

# View SQLite Database tables and recent logins in terminal
npm run db:view

# Optional: Start Docker services (PostgreSQL, Redis, MinIO) if using cloud DB
npm run docker:up
```

---

## 🛡 License

Licensed under the Apache License, Version 2.0.
