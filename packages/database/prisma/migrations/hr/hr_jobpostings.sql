-- Migration: hr_jobpostings
CREATE TABLE IF NOT EXISTS "hr_jobpostings" (
  "id" VARCHAR(64) PRIMARY KEY NOT NULL,
  "tenant_id" VARCHAR(64) NOT NULL,
  "code" VARCHAR(128) NOT NULL,
  "name" VARCHAR(255) NOT NULL,
  "status" VARCHAR(64) DEFAULT 'ACTIVE' NOT NULL,
  "metadata" JSONB DEFAULT '{}'::jsonb NOT NULL,
  "created_at" TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP NOT NULL,
  "updated_at" TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP NOT NULL,
  CONSTRAINT "fk_hr_jobpostings_tenant" FOREIGN KEY ("tenant_id") REFERENCES "tenants"("id") ON DELETE CASCADE
);

CREATE INDEX IF NOT EXISTS "idx_hr_jobpostings_tenant" ON "hr_jobpostings" ("tenant_id");
CREATE INDEX IF NOT EXISTS "idx_hr_jobpostings_status" ON "hr_jobpostings" ("status");
CREATE INDEX IF NOT EXISTS "idx_hr_jobpostings_created" ON "hr_jobpostings" ("created_at");
