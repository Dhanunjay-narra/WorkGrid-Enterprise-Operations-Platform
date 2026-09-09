-- Migration: workflow_workflownodes
CREATE TABLE IF NOT EXISTS "workflow_workflownodes" (
  "id" VARCHAR(64) PRIMARY KEY NOT NULL,
  "tenant_id" VARCHAR(64) NOT NULL,
  "code" VARCHAR(128) NOT NULL,
  "name" VARCHAR(255) NOT NULL,
  "status" VARCHAR(64) DEFAULT 'ACTIVE' NOT NULL,
  "metadata" JSONB DEFAULT '{}'::jsonb NOT NULL,
  "created_at" TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP NOT NULL,
  "updated_at" TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP NOT NULL,
  CONSTRAINT "fk_workflow_workflownodes_tenant" FOREIGN KEY ("tenant_id") REFERENCES "tenants"("id") ON DELETE CASCADE
);

CREATE INDEX IF NOT EXISTS "idx_workflow_workflownodes_tenant" ON "workflow_workflownodes" ("tenant_id");
CREATE INDEX IF NOT EXISTS "idx_workflow_workflownodes_status" ON "workflow_workflownodes" ("status");
CREATE INDEX IF NOT EXISTS "idx_workflow_workflownodes_created" ON "workflow_workflownodes" ("created_at");
