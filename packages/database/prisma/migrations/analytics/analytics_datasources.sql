-- Migration: analytics_datasources
CREATE TABLE IF NOT EXISTS "analytics_datasources" (
  "id" VARCHAR(64) PRIMARY KEY NOT NULL,
  "tenant_id" VARCHAR(64) NOT NULL,
  "code" VARCHAR(128) NOT NULL,
  "name" VARCHAR(255) NOT NULL,
  "status" VARCHAR(64) DEFAULT 'ACTIVE' NOT NULL,
  "metadata" JSONB DEFAULT '{}'::jsonb NOT NULL,
  "created_at" TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP NOT NULL,
  "updated_at" TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP NOT NULL,
  CONSTRAINT "fk_analytics_datasources_tenant" FOREIGN KEY ("tenant_id") REFERENCES "tenants"("id") ON DELETE CASCADE
);

CREATE INDEX IF NOT EXISTS "idx_analytics_datasources_tenant" ON "analytics_datasources" ("tenant_id");
CREATE INDEX IF NOT EXISTS "idx_analytics_datasources_status" ON "analytics_datasources" ("status");
CREATE INDEX IF NOT EXISTS "idx_analytics_datasources_created" ON "analytics_datasources" ("created_at");
