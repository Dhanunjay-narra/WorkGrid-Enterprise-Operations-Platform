# NEXORA System Architecture & Domain Specifications

NEXORA operates as a modular monolith with decoupled event-driven domain boundaries.

## Architectural Tenets
1. **Strict Multi-Tenancy**: Zero cross-tenant data leakage via row-level security and tenant-scoped query execution.
2. **Domain-Driven Design (DDD)**: Each of the 16 core business domains maintains its own aggregates, value objects, and domain services.
3. **Transactional Outbox & Event-Driven Substrate**: State changes emit strongly-typed DomainEvents with idempotency keys.
4. **Autonomous AI Multi-Agent Mesh**: 9 specialized agents operating on shared context graphs with tool-calling capabilities.
