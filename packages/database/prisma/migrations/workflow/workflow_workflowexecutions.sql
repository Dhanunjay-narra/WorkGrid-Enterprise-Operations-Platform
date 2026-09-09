-- Migration: workflow_workflowexecutions
CREATE TABLE IF NOT EXISTS "workflow_workflowexecutions" (
  "id" VARCHAR(64) PRIMARY KEY NOT NULL,
  "tenant_id" VARCHAR(64) NOT NULL,
  "code" VARCHAR(128) NOT NULL,
  "name" VARCHAR(255) NOT NULL,
  "status" VARCHAR(64) DEFAULT 'ACTIVE' NOT NULL,
  "metadata" JSONB DEFAULT '{}'::jsonb NOT NULL,
  "created_at" TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP NOT NULL,
  "updated_at" TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP NOT NULL,
  CONSTRAINT "fk_workflow_workflowexecutions_tenant" FOREIGN KEY ("tenant_id") REFERENCES "tenants"("id") ON DELETE CASCADE
);

CREATE INDEX IF NOT EXISTS "idx_workflow_workflowexecutions_tenant" ON "workflow_workflowexecutions" ("tenant_id");
CREATE INDEX IF NOT EXISTS "idx_workflow_workflowexecutions_status" ON "workflow_workflowexecutions" ("status");
CREATE INDEX IF NOT EXISTS "idx_workflow_workflowexecutions_created" ON "workflow_workflowexecutions" ("created_at");
