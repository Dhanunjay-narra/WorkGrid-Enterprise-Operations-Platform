-- Migration: analytics_cohortmetrics
CREATE TABLE IF NOT EXISTS "analytics_cohortmetrics" (
  "id" VARCHAR(64) PRIMARY KEY NOT NULL,
  "tenant_id" VARCHAR(64) NOT NULL,
  "code" VARCHAR(128) NOT NULL,
  "name" VARCHAR(255) NOT NULL,
  "status" VARCHAR(64) DEFAULT 'ACTIVE' NOT NULL,
  "metadata" JSONB DEFAULT '{}'::jsonb NOT NULL,
  "created_at" TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP NOT NULL,
  "updated_at" TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP NOT NULL,
  CONSTRAINT "fk_analytics_cohortmetrics_tenant" FOREIGN KEY ("tenant_id") REFERENCES "tenants"("id") ON DELETE CASCADE
);

CREATE INDEX IF NOT EXISTS "idx_analytics_cohortmetrics_tenant" ON "analytics_cohortmetrics" ("tenant_id");
CREATE INDEX IF NOT EXISTS "idx_analytics_cohortmetrics_status" ON "analytics_cohortmetrics" ("status");
CREATE INDEX IF NOT EXISTS "idx_analytics_cohortmetrics_created" ON "analytics_cohortmetrics" ("created_at");
