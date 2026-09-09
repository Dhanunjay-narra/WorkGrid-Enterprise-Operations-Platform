-- Migration: events_eventsubscriptions
CREATE TABLE IF NOT EXISTS "events_eventsubscriptions" (
  "id" VARCHAR(64) PRIMARY KEY NOT NULL,
  "tenant_id" VARCHAR(64) NOT NULL,
  "code" VARCHAR(128) NOT NULL,
  "name" VARCHAR(255) NOT NULL,
  "status" VARCHAR(64) DEFAULT 'ACTIVE' NOT NULL,
  "metadata" JSONB DEFAULT '{}'::jsonb NOT NULL,
  "created_at" TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP NOT NULL,
  "updated_at" TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP NOT NULL,
  CONSTRAINT "fk_events_eventsubscriptions_tenant" FOREIGN KEY ("tenant_id") REFERENCES "tenants"("id") ON DELETE CASCADE
);

CREATE INDEX IF NOT EXISTS "idx_events_eventsubscriptions_tenant" ON "events_eventsubscriptions" ("tenant_id");
CREATE INDEX IF NOT EXISTS "idx_events_eventsubscriptions_status" ON "events_eventsubscriptions" ("status");
CREATE INDEX IF NOT EXISTS "idx_events_eventsubscriptions_created" ON "events_eventsubscriptions" ("created_at");
