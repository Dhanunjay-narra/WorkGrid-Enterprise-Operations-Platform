-- Migration: integrations_adaptertelemetrys
CREATE TABLE IF NOT EXISTS "integrations_adaptertelemetrys" (
  "id" VARCHAR(64) PRIMARY KEY NOT NULL,
  "tenant_id" VARCHAR(64) NOT NULL,
  "code" VARCHAR(128) NOT NULL,
  "name" VARCHAR(255) NOT NULL,
  "status" VARCHAR(64) DEFAULT 'ACTIVE' NOT NULL,
  "metadata" JSONB DEFAULT '{}'::jsonb NOT NULL,
  "created_at" TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP NOT NULL,
  "updated_at" TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP NOT NULL,
  CONSTRAINT "fk_integrations_adaptertelemetrys_tenant" FOREIGN KEY ("tenant_id") REFERENCES "tenants"("id") ON DELETE CASCADE
);

CREATE INDEX IF NOT EXISTS "idx_integrations_adaptertelemetrys_tenant" ON "integrations_adaptertelemetrys" ("tenant_id");
CREATE INDEX IF NOT EXISTS "idx_integrations_adaptertelemetrys_status" ON "integrations_adaptertelemetrys" ("status");
CREATE INDEX IF NOT EXISTS "idx_integrations_adaptertelemetrys_created" ON "integrations_adaptertelemetrys" ("created_at");
