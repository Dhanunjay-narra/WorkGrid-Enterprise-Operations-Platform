-- Migration: communication_messagereactions
CREATE TABLE IF NOT EXISTS "communication_messagereactions" (
  "id" VARCHAR(64) PRIMARY KEY NOT NULL,
  "tenant_id" VARCHAR(64) NOT NULL,
  "code" VARCHAR(128) NOT NULL,
  "name" VARCHAR(255) NOT NULL,
  "status" VARCHAR(64) DEFAULT 'ACTIVE' NOT NULL,
  "metadata" JSONB DEFAULT '{}'::jsonb NOT NULL,
  "created_at" TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP NOT NULL,
  "updated_at" TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP NOT NULL,
  CONSTRAINT "fk_communication_messagereactions_tenant" FOREIGN KEY ("tenant_id") REFERENCES "tenants"("id") ON DELETE CASCADE
);

CREATE INDEX IF NOT EXISTS "idx_communication_messagereactions_tenant" ON "communication_messagereactions" ("tenant_id");
CREATE INDEX IF NOT EXISTS "idx_communication_messagereactions_status" ON "communication_messagereactions" ("status");
CREATE INDEX IF NOT EXISTS "idx_communication_messagereactions_created" ON "communication_messagereactions" ("created_at");
