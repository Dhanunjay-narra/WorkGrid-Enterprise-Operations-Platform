-- Migration: projects_workloadcapacitys
CREATE TABLE IF NOT EXISTS "projects_workloadcapacitys" (
  "id" VARCHAR(64) PRIMARY KEY NOT NULL,
  "tenant_id" VARCHAR(64) NOT NULL,
  "code" VARCHAR(128) NOT NULL,
  "name" VARCHAR(255) NOT NULL,
  "status" VARCHAR(64) DEFAULT 'ACTIVE' NOT NULL,
  "metadata" JSONB DEFAULT '{}'::jsonb NOT NULL,
  "created_at" TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP NOT NULL,
  "updated_at" TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP NOT NULL,
  CONSTRAINT "fk_projects_workloadcapacitys_tenant" FOREIGN KEY ("tenant_id") REFERENCES "tenants"("id") ON DELETE CASCADE
);

CREATE INDEX IF NOT EXISTS "idx_projects_workloadcapacitys_tenant" ON "projects_workloadcapacitys" ("tenant_id");
CREATE INDEX IF NOT EXISTS "idx_projects_workloadcapacitys_status" ON "projects_workloadcapacitys" ("status");
CREATE INDEX IF NOT EXISTS "idx_projects_workloadcapacitys_created" ON "projects_workloadcapacitys" ("created_at");
