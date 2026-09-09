-- Migration: hr_performancereviews
CREATE TABLE IF NOT EXISTS "hr_performancereviews" (
  "id" VARCHAR(64) PRIMARY KEY NOT NULL,
  "tenant_id" VARCHAR(64) NOT NULL,
  "code" VARCHAR(128) NOT NULL,
  "name" VARCHAR(255) NOT NULL,
  "status" VARCHAR(64) DEFAULT 'ACTIVE' NOT NULL,
  "metadata" JSONB DEFAULT '{}'::jsonb NOT NULL,
  "created_at" TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP NOT NULL,
  "updated_at" TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP NOT NULL,
  CONSTRAINT "fk_hr_performancereviews_tenant" FOREIGN KEY ("tenant_id") REFERENCES "tenants"("id") ON DELETE CASCADE
);

CREATE INDEX IF NOT EXISTS "idx_hr_performancereviews_tenant" ON "hr_performancereviews" ("tenant_id");
CREATE INDEX IF NOT EXISTS "idx_hr_performancereviews_status" ON "hr_performancereviews" ("status");
CREATE INDEX IF NOT EXISTS "idx_hr_performancereviews_created" ON "hr_performancereviews" ("created_at");
