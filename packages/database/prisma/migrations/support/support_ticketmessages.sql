-- Migration: support_ticketmessages
CREATE TABLE IF NOT EXISTS "support_ticketmessages" (
  "id" VARCHAR(64) PRIMARY KEY NOT NULL,
  "tenant_id" VARCHAR(64) NOT NULL,
  "code" VARCHAR(128) NOT NULL,
  "name" VARCHAR(255) NOT NULL,
  "status" VARCHAR(64) DEFAULT 'ACTIVE' NOT NULL,
  "metadata" JSONB DEFAULT '{}'::jsonb NOT NULL,
  "created_at" TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP NOT NULL,
  "updated_at" TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP NOT NULL,
  CONSTRAINT "fk_support_ticketmessages_tenant" FOREIGN KEY ("tenant_id") REFERENCES "tenants"("id") ON DELETE CASCADE
);

CREATE INDEX IF NOT EXISTS "idx_support_ticketmessages_tenant" ON "support_ticketmessages" ("tenant_id");
CREATE INDEX IF NOT EXISTS "idx_support_ticketmessages_status" ON "support_ticketmessages" ("status");
CREATE INDEX IF NOT EXISTS "idx_support_ticketmessages_created" ON "support_ticketmessages" ("created_at");
