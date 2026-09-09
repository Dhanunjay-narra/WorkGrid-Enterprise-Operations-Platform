-- Migration: crm_leadscores
CREATE TABLE IF NOT EXISTS "crm_leadscores" (
  "id" VARCHAR(64) PRIMARY KEY NOT NULL,
  "tenant_id" VARCHAR(64) NOT NULL,
  "code" VARCHAR(128) NOT NULL,
  "name" VARCHAR(255) NOT NULL,
  "status" VARCHAR(64) DEFAULT 'ACTIVE' NOT NULL,
  "metadata" JSONB DEFAULT '{}'::jsonb NOT NULL,
  "created_at" TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP NOT NULL,
  "updated_at" TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP NOT NULL,
  CONSTRAINT "fk_crm_leadscores_tenant" FOREIGN KEY ("tenant_id") REFERENCES "tenants"("id") ON DELETE CASCADE
);

CREATE INDEX IF NOT EXISTS "idx_crm_leadscores_tenant" ON "crm_leadscores" ("tenant_id");
CREATE INDEX IF NOT EXISTS "idx_crm_leadscores_status" ON "crm_leadscores" ("status");
CREATE INDEX IF NOT EXISTS "idx_crm_leadscores_created" ON "crm_leadscores" ("created_at");
