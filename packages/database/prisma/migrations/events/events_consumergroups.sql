-- Migration: events_consumergroups
CREATE TABLE IF NOT EXISTS "events_consumergroups" (
  "id" VARCHAR(64) PRIMARY KEY NOT NULL,
  "tenant_id" VARCHAR(64) NOT NULL,
  "code" VARCHAR(128) NOT NULL,
  "name" VARCHAR(255) NOT NULL,
  "status" VARCHAR(64) DEFAULT 'ACTIVE' NOT NULL,
  "metadata" JSONB DEFAULT '{}'::jsonb NOT NULL,
  "created_at" TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP NOT NULL,
  "updated_at" TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP NOT NULL,
  CONSTRAINT "fk_events_consumergroups_tenant" FOREIGN KEY ("tenant_id") REFERENCES "tenants"("id") ON DELETE CASCADE
);

CREATE INDEX IF NOT EXISTS "idx_events_consumergroups_tenant" ON "events_consumergroups" ("tenant_id");
CREATE INDEX IF NOT EXISTS "idx_events_consumergroups_status" ON "events_consumergroups" ("status");
CREATE INDEX IF NOT EXISTS "idx_events_consumergroups_created" ON "events_consumergroups" ("created_at");
