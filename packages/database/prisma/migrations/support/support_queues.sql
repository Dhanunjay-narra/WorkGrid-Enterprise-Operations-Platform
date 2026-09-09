-- Migration: support_queues
CREATE TABLE IF NOT EXISTS "support_queues" (
  "id" VARCHAR(64) PRIMARY KEY NOT NULL,
  "tenant_id" VARCHAR(64) NOT NULL,
  "code" VARCHAR(128) NOT NULL,
  "name" VARCHAR(255) NOT NULL,
  "status" VARCHAR(64) DEFAULT 'ACTIVE' NOT NULL,
  "metadata" JSONB DEFAULT '{}'::jsonb NOT NULL,
  "created_at" TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP NOT NULL,
  "updated_at" TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP NOT NULL,
  CONSTRAINT "fk_support_queues_tenant" FOREIGN KEY ("tenant_id") REFERENCES "tenants"("id") ON DELETE CASCADE
);

CREATE INDEX IF NOT EXISTS "idx_support_queues_tenant" ON "support_queues" ("tenant_id");
CREATE INDEX IF NOT EXISTS "idx_support_queues_status" ON "support_queues" ("status");
CREATE INDEX IF NOT EXISTS "idx_support_queues_created" ON "support_queues" ("created_at");
