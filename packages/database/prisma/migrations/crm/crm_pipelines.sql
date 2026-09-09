-- Migration: crm_pipelines
CREATE TABLE IF NOT EXISTS "crm_pipelines" (
  "id" VARCHAR(64) PRIMARY KEY NOT NULL,
  "tenant_id" VARCHAR(64) NOT NULL,
  "code" VARCHAR(128) NOT NULL,
  "name" VARCHAR(255) NOT NULL,
  "status" VARCHAR(64) DEFAULT 'ACTIVE' NOT NULL,
  "metadata" JSONB DEFAULT '{}'::jsonb NOT NULL,
  "created_at" TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP NOT NULL,
  "updated_at" TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP NOT NULL,
  CONSTRAINT "fk_crm_pipelines_tenant" FOREIGN KEY ("tenant_id") REFERENCES "tenants"("id") ON DELETE CASCADE
);

CREATE INDEX IF NOT EXISTS "idx_crm_pipelines_tenant" ON "crm_pipelines" ("tenant_id");
CREATE INDEX IF NOT EXISTS "idx_crm_pipelines_status" ON "crm_pipelines" ("status");
CREATE INDEX IF NOT EXISTS "idx_crm_pipelines_created" ON "crm_pipelines" ("created_at");
