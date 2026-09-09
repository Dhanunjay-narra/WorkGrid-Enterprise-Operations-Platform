-- Migration: events_publishmetrics
CREATE TABLE IF NOT EXISTS "events_publishmetrics" (
  "id" VARCHAR(64) PRIMARY KEY NOT NULL,
  "tenant_id" VARCHAR(64) NOT NULL,
  "code" VARCHAR(128) NOT NULL,
  "name" VARCHAR(255) NOT NULL,
  "status" VARCHAR(64) DEFAULT 'ACTIVE' NOT NULL,
  "metadata" JSONB DEFAULT '{}'::jsonb NOT NULL,
  "created_at" TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP NOT NULL,
  "updated_at" TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP NOT NULL,
  CONSTRAINT "fk_events_publishmetrics_tenant" FOREIGN KEY ("tenant_id") REFERENCES "tenants"("id") ON DELETE CASCADE
);

CREATE INDEX IF NOT EXISTS "idx_events_publishmetrics_tenant" ON "events_publishmetrics" ("tenant_id");
CREATE INDEX IF NOT EXISTS "idx_events_publishmetrics_status" ON "events_publishmetrics" ("status");
CREATE INDEX IF NOT EXISTS "idx_events_publishmetrics_created" ON "events_publishmetrics" ("created_at");
