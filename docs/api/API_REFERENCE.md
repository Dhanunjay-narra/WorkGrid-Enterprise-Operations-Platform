# NEXORA REST & WebSocket API Reference

Base Endpoint: `https://api.nexora.io/api/v1`

## Authentication Headers
- `Authorization: Bearer <JWT_ACCESS_TOKEN>`
- `X-Tenant-ID: <TENANT_UUID>`

## Core Routes
- `GET /health` - Liveness & readiness probes
- `POST /auth/login` - User authentication & MFA trigger
- `GET /crm/deals` - Deal pipeline listing
- `POST /workflow/execute` - Trigger workflow DAG execution
- `POST /ai/agent/dispatch` - Invoke autonomous agent
