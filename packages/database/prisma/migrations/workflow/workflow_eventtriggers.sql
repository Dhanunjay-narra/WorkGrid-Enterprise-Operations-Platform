-- Migration: workflow_eventtriggers
CREATE TABLE IF NOT EXISTS "workflow_eventtriggers" (
  "id" VARCHAR(64) PRIMARY KEY NOT NULL,
  "tenant_id" VARCHAR(64) NOT NULL,
  "code" VARCHAR(128) NOT NULL,
  "name" VARCHAR(255) NOT NULL,
  "status" VARCHAR(64) DEFAULT 'ACTIVE' NOT NULL,
  "metadata" JSONB DEFAULT '{}'::jsonb NOT NULL,
  "created_at" TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP NOT NULL,
  "updated_at" TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP NOT NULL,
  CONSTRAINT "fk_workflow_eventtriggers_tenant" FOREIGN KEY ("tenant_id") REFERENCES "tenants"("id") ON DELETE CASCADE
);

CREATE INDEX IF NOT EXISTS "idx_workflow_eventtriggers_tenant" ON "workflow_eventtriggers" ("tenant_id");
CREATE INDEX IF NOT EXISTS "idx_workflow_eventtriggers_status" ON "workflow_eventtriggers" ("status");
CREATE INDEX IF NOT EXISTS "idx_workflow_eventtriggers_created" ON "workflow_eventtriggers" ("created_at");
