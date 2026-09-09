-- Migration: hr_timesheets
CREATE TABLE IF NOT EXISTS "hr_timesheets" (
  "id" VARCHAR(64) PRIMARY KEY NOT NULL,
  "tenant_id" VARCHAR(64) NOT NULL,
  "code" VARCHAR(128) NOT NULL,
  "name" VARCHAR(255) NOT NULL,
  "status" VARCHAR(64) DEFAULT 'ACTIVE' NOT NULL,
  "metadata" JSONB DEFAULT '{}'::jsonb NOT NULL,
  "created_at" TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP NOT NULL,
  "updated_at" TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP NOT NULL,
  CONSTRAINT "fk_hr_timesheets_tenant" FOREIGN KEY ("tenant_id") REFERENCES "tenants"("id") ON DELETE CASCADE
);

CREATE INDEX IF NOT EXISTS "idx_hr_timesheets_tenant" ON "hr_timesheets" ("tenant_id");
CREATE INDEX IF NOT EXISTS "idx_hr_timesheets_status" ON "hr_timesheets" ("status");
CREATE INDEX IF NOT EXISTS "idx_hr_timesheets_created" ON "hr_timesheets" ("created_at");
