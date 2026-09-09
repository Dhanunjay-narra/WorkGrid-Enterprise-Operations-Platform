-- Migration: projects_sprintretrospectives
CREATE TABLE IF NOT EXISTS "projects_sprintretrospectives" (
  "id" VARCHAR(64) PRIMARY KEY NOT NULL,
  "tenant_id" VARCHAR(64) NOT NULL,
  "code" VARCHAR(128) NOT NULL,
  "name" VARCHAR(255) NOT NULL,
  "status" VARCHAR(64) DEFAULT 'ACTIVE' NOT NULL,
  "metadata" JSONB DEFAULT '{}'::jsonb NOT NULL,
  "created_at" TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP NOT NULL,
  "updated_at" TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP NOT NULL,
  CONSTRAINT "fk_projects_sprintretrospectives_tenant" FOREIGN KEY ("tenant_id") REFERENCES "tenants"("id") ON DELETE CASCADE
);

CREATE INDEX IF NOT EXISTS "idx_projects_sprintretrospectives_tenant" ON "projects_sprintretrospectives" ("tenant_id");
CREATE INDEX IF NOT EXISTS "idx_projects_sprintretrospectives_status" ON "projects_sprintretrospectives" ("status");
CREATE INDEX IF NOT EXISTS "idx_projects_sprintretrospectives_created" ON "projects_sprintretrospectives" ("created_at");
