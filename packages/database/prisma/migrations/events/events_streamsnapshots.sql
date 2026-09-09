-- Migration: events_streamsnapshots
CREATE TABLE IF NOT EXISTS "events_streamsnapshots" (
  "id" VARCHAR(64) PRIMARY KEY NOT NULL,
  "tenant_id" VARCHAR(64) NOT NULL,
  "code" VARCHAR(128) NOT NULL,
  "name" VARCHAR(255) NOT NULL,
  "status" VARCHAR(64) DEFAULT 'ACTIVE' NOT NULL,
  "metadata" JSONB DEFAULT '{}'::jsonb NOT NULL,
  "created_at" TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP NOT NULL,
  "updated_at" TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP NOT NULL,
  CONSTRAINT "fk_events_streamsnapshots_tenant" FOREIGN KEY ("tenant_id") REFERENCES "tenants"("id") ON DELETE CASCADE
);

CREATE INDEX IF NOT EXISTS "idx_events_streamsnapshots_tenant" ON "events_streamsnapshots" ("tenant_id");
CREATE INDEX IF NOT EXISTS "idx_events_streamsnapshots_status" ON "events_streamsnapshots" ("status");
CREATE INDEX IF NOT EXISTS "idx_events_streamsnapshots_created" ON "events_streamsnapshots" ("created_at");
