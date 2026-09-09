-- Migration: events_deadletterevents
CREATE TABLE IF NOT EXISTS "events_deadletterevents" (
  "id" VARCHAR(64) PRIMARY KEY NOT NULL,
  "tenant_id" VARCHAR(64) NOT NULL,
  "code" VARCHAR(128) NOT NULL,
  "name" VARCHAR(255) NOT NULL,
  "status" VARCHAR(64) DEFAULT 'ACTIVE' NOT NULL,
  "metadata" JSONB DEFAULT '{}'::jsonb NOT NULL,
  "created_at" TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP NOT NULL,
  "updated_at" TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP NOT NULL,
  CONSTRAINT "fk_events_deadletterevents_tenant" FOREIGN KEY ("tenant_id") REFERENCES "tenants"("id") ON DELETE CASCADE
);

CREATE INDEX IF NOT EXISTS "idx_events_deadletterevents_tenant" ON "events_deadletterevents" ("tenant_id");
CREATE INDEX IF NOT EXISTS "idx_events_deadletterevents_status" ON "events_deadletterevents" ("status");
CREATE INDEX IF NOT EXISTS "idx_events_deadletterevents_created" ON "events_deadletterevents" ("created_at");
