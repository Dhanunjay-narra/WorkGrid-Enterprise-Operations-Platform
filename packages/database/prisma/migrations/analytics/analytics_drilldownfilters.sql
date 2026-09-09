-- Migration: analytics_drilldownfilters
CREATE TABLE IF NOT EXISTS "analytics_drilldownfilters" (
  "id" VARCHAR(64) PRIMARY KEY NOT NULL,
  "tenant_id" VARCHAR(64) NOT NULL,
  "code" VARCHAR(128) NOT NULL,
  "name" VARCHAR(255) NOT NULL,
  "status" VARCHAR(64) DEFAULT 'ACTIVE' NOT NULL,
  "metadata" JSONB DEFAULT '{}'::jsonb NOT NULL,
  "created_at" TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP NOT NULL,
  "updated_at" TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP NOT NULL,
  CONSTRAINT "fk_analytics_drilldownfilters_tenant" FOREIGN KEY ("tenant_id") REFERENCES "tenants"("id") ON DELETE CASCADE
);

CREATE INDEX IF NOT EXISTS "idx_analytics_drilldownfilters_tenant" ON "analytics_drilldownfilters" ("tenant_id");
CREATE INDEX IF NOT EXISTS "idx_analytics_drilldownfilters_status" ON "analytics_drilldownfilters" ("status");
CREATE INDEX IF NOT EXISTS "idx_analytics_drilldownfilters_created" ON "analytics_drilldownfilters" ("created_at");
