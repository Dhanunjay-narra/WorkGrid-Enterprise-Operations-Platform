-- Migration: workflow_cronschedules
CREATE TABLE IF NOT EXISTS "workflow_cronschedules" (
  "id" VARCHAR(64) PRIMARY KEY NOT NULL,
  "tenant_id" VARCHAR(64) NOT NULL,
  "code" VARCHAR(128) NOT NULL,
  "name" VARCHAR(255) NOT NULL,
  "status" VARCHAR(64) DEFAULT 'ACTIVE' NOT NULL,
  "metadata" JSONB DEFAULT '{}'::jsonb NOT NULL,
  "created_at" TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP NOT NULL,
  "updated_at" TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP NOT NULL,
  CONSTRAINT "fk_workflow_cronschedules_tenant" FOREIGN KEY ("tenant_id") REFERENCES "tenants"("id") ON DELETE CASCADE
);

CREATE INDEX IF NOT EXISTS "idx_workflow_cronschedules_tenant" ON "workflow_cronschedules" ("tenant_id");
CREATE INDEX IF NOT EXISTS "idx_workflow_cronschedules_status" ON "workflow_cronschedules" ("status");
CREATE INDEX IF NOT EXISTS "idx_workflow_cronschedules_created" ON "workflow_cronschedules" ("created_at");
