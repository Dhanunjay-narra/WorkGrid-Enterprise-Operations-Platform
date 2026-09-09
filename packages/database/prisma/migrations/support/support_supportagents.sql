-- Migration: support_supportagents
CREATE TABLE IF NOT EXISTS "support_supportagents" (
  "id" VARCHAR(64) PRIMARY KEY NOT NULL,
  "tenant_id" VARCHAR(64) NOT NULL,
  "code" VARCHAR(128) NOT NULL,
  "name" VARCHAR(255) NOT NULL,
  "status" VARCHAR(64) DEFAULT 'ACTIVE' NOT NULL,
  "metadata" JSONB DEFAULT '{}'::jsonb NOT NULL,
  "created_at" TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP NOT NULL,
  "updated_at" TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP NOT NULL,
  CONSTRAINT "fk_support_supportagents_tenant" FOREIGN KEY ("tenant_id") REFERENCES "tenants"("id") ON DELETE CASCADE
);

CREATE INDEX IF NOT EXISTS "idx_support_supportagents_tenant" ON "support_supportagents" ("tenant_id");
CREATE INDEX IF NOT EXISTS "idx_support_supportagents_status" ON "support_supportagents" ("status");
CREATE INDEX IF NOT EXISTS "idx_support_supportagents_created" ON "support_supportagents" ("created_at");
