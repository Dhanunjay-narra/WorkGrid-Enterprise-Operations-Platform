# Relational Database Schema & Indexing Model

The platform utilizes PostgreSQL 16 with `pgvector` extension for semantic AI indexing.

- All primary keys utilize RFC 4122 compliant UUID v4 identifiers.
- Foreign keys are indexed with cascaded deletion or soft-delete safeguards.
- Multi-column composite indexes support multi-tenant query acceleration (`tenantId`, `status`, `createdAt`).
