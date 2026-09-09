-- Migration: support_escalationrules
CREATE TABLE IF NOT EXISTS "support_escalationrules" (
  "id" VARCHAR(64) PRIMARY KEY NOT NULL,
  "tenant_id" VARCHAR(64) NOT NULL,
  "code" VARCHAR(128) NOT NULL,
  "name" VARCHAR(255) NOT NULL,
  "status" VARCHAR(64) DEFAULT 'ACTIVE' NOT NULL,
  "metadata" JSONB DEFAULT '{}'::jsonb NOT NULL,
  "created_at" TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP NOT NULL,
  "updated_at" TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP NOT NULL,
  CONSTRAINT "fk_support_escalationrules_tenant" FOREIGN KEY ("tenant_id") REFERENCES "tenants"("id") ON DELETE CASCADE
);

CREATE INDEX IF NOT EXISTS "idx_support_escalationrules_tenant" ON "support_escalationrules" ("tenant_id");
CREATE INDEX IF NOT EXISTS "idx_support_escalationrules_status" ON "support_escalationrules" ("status");
CREATE INDEX IF NOT EXISTS "idx_support_escalationrules_created" ON "support_escalationrules" ("created_at");
