-- Migration: identity_devices
CREATE TABLE IF NOT EXISTS "identity_devices" (
  "id" VARCHAR(64) PRIMARY KEY NOT NULL,
  "tenant_id" VARCHAR(64) NOT NULL,
  "code" VARCHAR(128) NOT NULL,
  "name" VARCHAR(255) NOT NULL,
  "status" VARCHAR(64) DEFAULT 'ACTIVE' NOT NULL,
  "metadata" JSONB DEFAULT '{}'::jsonb NOT NULL,
  "created_at" TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP NOT NULL,
  "updated_at" TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP NOT NULL,
  CONSTRAINT "fk_identity_devices_tenant" FOREIGN KEY ("tenant_id") REFERENCES "tenants"("id") ON DELETE CASCADE
);

CREATE INDEX IF NOT EXISTS "idx_identity_devices_tenant" ON "identity_devices" ("tenant_id");
CREATE INDEX IF NOT EXISTS "idx_identity_devices_status" ON "identity_devices" ("status");
CREATE INDEX IF NOT EXISTS "idx_identity_devices_created" ON "identity_devices" ("created_at");
