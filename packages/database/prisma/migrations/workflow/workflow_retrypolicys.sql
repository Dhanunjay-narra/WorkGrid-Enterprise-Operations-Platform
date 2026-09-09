-- Migration: workflow_retrypolicys
CREATE TABLE IF NOT EXISTS "workflow_retrypolicys" (
  "id" VARCHAR(64) PRIMARY KEY NOT NULL,
  "tenant_id" VARCHAR(64) NOT NULL,
  "code" VARCHAR(128) NOT NULL,
  "name" VARCHAR(255) NOT NULL,
  "status" VARCHAR(64) DEFAULT 'ACTIVE' NOT NULL,
  "metadata" JSONB DEFAULT '{}'::jsonb NOT NULL,
  "created_at" TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP NOT NULL,
  "updated_at" TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP NOT NULL,
  CONSTRAINT "fk_workflow_retrypolicys_tenant" FOREIGN KEY ("tenant_id") REFERENCES "tenants"("id") ON DELETE CASCADE
);

CREATE INDEX IF NOT EXISTS "idx_workflow_retrypolicys_tenant" ON "workflow_retrypolicys" ("tenant_id");
CREATE INDEX IF NOT EXISTS "idx_workflow_retrypolicys_status" ON "workflow_retrypolicys" ("status");
CREATE INDEX IF NOT EXISTS "idx_workflow_retrypolicys_created" ON "workflow_retrypolicys" ("created_at");
