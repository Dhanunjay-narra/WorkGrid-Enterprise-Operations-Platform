-- Migration: crm_opportunitysplits
CREATE TABLE IF NOT EXISTS "crm_opportunitysplits" (
  "id" VARCHAR(64) PRIMARY KEY NOT NULL,
  "tenant_id" VARCHAR(64) NOT NULL,
  "code" VARCHAR(128) NOT NULL,
  "name" VARCHAR(255) NOT NULL,
  "status" VARCHAR(64) DEFAULT 'ACTIVE' NOT NULL,
  "metadata" JSONB DEFAULT '{}'::jsonb NOT NULL,
  "created_at" TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP NOT NULL,
  "updated_at" TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP NOT NULL,
  CONSTRAINT "fk_crm_opportunitysplits_tenant" FOREIGN KEY ("tenant_id") REFERENCES "tenants"("id") ON DELETE CASCADE
);

CREATE INDEX IF NOT EXISTS "idx_crm_opportunitysplits_tenant" ON "crm_opportunitysplits" ("tenant_id");
CREATE INDEX IF NOT EXISTS "idx_crm_opportunitysplits_status" ON "crm_opportunitysplits" ("status");
CREATE INDEX IF NOT EXISTS "idx_crm_opportunitysplits_created" ON "crm_opportunitysplits" ("created_at");
