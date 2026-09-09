FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json tsconfig.base.json ./
COPY packages/ ./packages/
COPY services/api-gateway/ ./services/api-gateway/
RUN npm install
CMD ["node", "services/api-gateway/src/server.ts"]
