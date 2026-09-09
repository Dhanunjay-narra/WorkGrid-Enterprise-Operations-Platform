-- Migration: communication_callrooms
CREATE TABLE IF NOT EXISTS "communication_callrooms" (
  "id" VARCHAR(64) PRIMARY KEY NOT NULL,
  "tenant_id" VARCHAR(64) NOT NULL,
  "code" VARCHAR(128) NOT NULL,
  "name" VARCHAR(255) NOT NULL,
  "status" VARCHAR(64) DEFAULT 'ACTIVE' NOT NULL,
  "metadata" JSONB DEFAULT '{}'::jsonb NOT NULL,
  "created_at" TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP NOT NULL,
  "updated_at" TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP NOT NULL,
  CONSTRAINT "fk_communication_callrooms_tenant" FOREIGN KEY ("tenant_id") REFERENCES "tenants"("id") ON DELETE CASCADE
);

CREATE INDEX IF NOT EXISTS "idx_communication_callrooms_tenant" ON "communication_callrooms" ("tenant_id");
CREATE INDEX IF NOT EXISTS "idx_communication_callrooms_status" ON "communication_callrooms" ("status");
CREATE INDEX IF NOT EXISTS "idx_communication_callrooms_created" ON "communication_callrooms" ("created_at");
