-- Migration: projects_subtasks
CREATE TABLE IF NOT EXISTS "projects_subtasks" (
  "id" VARCHAR(64) PRIMARY KEY NOT NULL,
  "tenant_id" VARCHAR(64) NOT NULL,
  "code" VARCHAR(128) NOT NULL,
  "name" VARCHAR(255) NOT NULL,
  "status" VARCHAR(64) DEFAULT 'ACTIVE' NOT NULL,
  "metadata" JSONB DEFAULT '{}'::jsonb NOT NULL,
  "created_at" TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP NOT NULL,
  "updated_at" TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP NOT NULL,
  CONSTRAINT "fk_projects_subtasks_tenant" FOREIGN KEY ("tenant_id") REFERENCES "tenants"("id") ON DELETE CASCADE
);

CREATE INDEX IF NOT EXISTS "idx_projects_subtasks_tenant" ON "projects_subtasks" ("tenant_id");
CREATE INDEX IF NOT EXISTS "idx_projects_subtasks_status" ON "projects_subtasks" ("status");
CREATE INDEX IF NOT EXISTS "idx_projects_subtasks_created" ON "projects_subtasks" ("created_at");
