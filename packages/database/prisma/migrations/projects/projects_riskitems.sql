-- Migration: projects_riskitems
CREATE TABLE IF NOT EXISTS "projects_riskitems" (
  "id" VARCHAR(64) PRIMARY KEY NOT NULL,
  "tenant_id" VARCHAR(64) NOT NULL,
  "code" VARCHAR(128) NOT NULL,
  "name" VARCHAR(255) NOT NULL,
  "status" VARCHAR(64) DEFAULT 'ACTIVE' NOT NULL,
  "metadata" JSONB DEFAULT '{}'::jsonb NOT NULL,
  "created_at" TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP NOT NULL,
  "updated_at" TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP NOT NULL,
  CONSTRAINT "fk_projects_riskitems_tenant" FOREIGN KEY ("tenant_id") REFERENCES "tenants"("id") ON DELETE CASCADE
);

CREATE INDEX IF NOT EXISTS "idx_projects_riskitems_tenant" ON "projects_riskitems" ("tenant_id");
CREATE INDEX IF NOT EXISTS "idx_projects_riskitems_status" ON "projects_riskitems" ("status");
CREATE INDEX IF NOT EXISTS "idx_projects_riskitems_created" ON "projects_riskitems" ("created_at");
