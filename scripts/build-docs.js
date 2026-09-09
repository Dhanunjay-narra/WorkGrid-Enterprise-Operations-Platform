const fs = require('fs');
const path = require('path');

function write(filePath, content) {
  const dir = path.dirname(filePath);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(filePath, content.trim() + '\n', 'utf8');
  console.log('Created: ' + filePath);
}

write('docs/architecture/ARCHITECTURE.md', `
# NEXORA System Architecture & Domain Specifications

NEXORA operates as a modular monolith with decoupled event-driven domain boundaries.

## Architectural Tenets
1. **Strict Multi-Tenancy**: Zero cross-tenant data leakage via row-level security and tenant-scoped query execution.
2. **Domain-Driven Design (DDD)**: Each of the 16 core business domains maintains its own aggregates, value objects, and domain services.
3. **Transactional Outbox & Event-Driven Substrate**: State changes emit strongly-typed DomainEvents with idempotency keys.
4. **Autonomous AI Multi-Agent Mesh**: 9 specialized agents operating on shared context graphs with tool-calling capabilities.
`);

write('docs/architecture/AI_AGENTS.md', `
# NEXORA Autonomous 9-Agent Operational Mesh

| Agent | Responsibility | Primary Tools & Domain Triggers |
|---|---|---|
| **Sales Agent** | Lead qualification, deal velocity forecasting | \`crm.qualifyLead\`, \`crm.calculateForecast\` |
| **HR Agent** | Attendance anomaly detection, shift optimization | \`hr.checkAttendance\`, \`hr.scheduleShift\` |
| **Finance Agent** | Ledger reconciliation, expense OCR auditing | \`finance.reconcileLedger\`, \`finance.auditExpense\` |
| **Project Agent** | Critical path calculation, sprint bottleneck triage | \`projects.calculateGanttPath\`, \`projects.balanceLoad\` |
| **Support Agent** | Auto-triage, sentiment analysis, SLA prediction | \`support.triageTicket\`, \`support.escalateTicket\` |
| **Inventory Agent** | Reorder point calculation, supplier scoring | \`inventory.checkStock\`, \`inventory.triggerPO\` |
| **Security Agent** | Zero-trust session review, threat scoring | \`security.auditSessions\`, \`security.blockIP\` |
| **Executive Assistant** | Cross-domain KPI summarization, executive queries | \`analytics.getEnterpriseKPIs\` |
| **Analytics Agent** | Cohort analysis, revenue projections | \`analytics.runCohortAnalysis\` |
`);

write('docs/api/API_REFERENCE.md', `
# NEXORA REST & WebSocket API Reference

Base Endpoint: \`https://api.nexora.io/api/v1\`

## Authentication Headers
- \`Authorization: Bearer <JWT_ACCESS_TOKEN>\`
- \`X-Tenant-ID: <TENANT_UUID>\`

## Core Routes
- \`GET /health\` - Liveness & readiness probes
- \`POST /auth/login\` - User authentication & MFA trigger
- \`GET /crm/deals\` - Deal pipeline listing
- \`POST /workflow/execute\` - Trigger workflow DAG execution
- \`POST /ai/agent/dispatch\` - Invoke autonomous agent
`);

write('docs/database/SCHEMA_DESIGN.md', `
# Relational Database Schema & Indexing Model

The platform utilizes PostgreSQL 16 with \`pgvector\` extension for semantic AI indexing.

- All primary keys utilize RFC 4122 compliant UUID v4 identifiers.
- Foreign keys are indexed with cascaded deletion or soft-delete safeguards.
- Multi-column composite indexes support multi-tenant query acceleration (\`tenantId\`, \`status\`, \`createdAt\`).
`);

write('docs/security/SECURITY_AND_COMPLIANCE.md', `
# Security, Compliance & Threat Model

- **Authentication**: Argon2id password hashing, TOTP MFA, WebAuthn passkey support.
- **Authorization**: Dual RBAC and dynamic ABAC policy evaluation engine.
- **Data Protection**: AES-256 encryption at rest, TLS 1.3 in transit, automated PII masking.
- **Audit Trails**: Tamper-evident append-only audit stream.
`);

write('docs/testing/TEST_STRATEGY.md', `
# Comprehensive Testing Strategy

- **Unit Tests**: Domain engine methods, validation schemas, calculus functions.
- **Integration Tests**: Database transactions, event bus publishing, multi-tenant boundaries.
- **E2E Tests**: Gateway route handling, agent dispatching, visual DAG workflows.
`);

write('docs/devops/DEPLOYMENT_GUIDE.md', `
# DevOps & Production Deployment Guide

NEXORA supports deployment across:
1. **Docker Compose**: Rapid local and staging setups.
2. **Kubernetes & Helm**: Elastic auto-scaling production clusters with HPA and multi-region ingress.
3. **Terraform**: Infrastructure-as-Code for AWS / GCP clouds.
`);

console.log('Documentation generated successfully.');
