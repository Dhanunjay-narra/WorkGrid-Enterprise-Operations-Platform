-- Migration: identity_passkeycredentials
CREATE TABLE IF NOT EXISTS "identity_passkeycredentials" (
  "id" VARCHAR(64) PRIMARY KEY NOT NULL,
  "tenant_id" VARCHAR(64) NOT NULL,
  "code" VARCHAR(128) NOT NULL,
  "name" VARCHAR(255) NOT NULL,
  "status" VARCHAR(64) DEFAULT 'ACTIVE' NOT NULL,
  "metadata" JSONB DEFAULT '{}'::jsonb NOT NULL,
  "created_at" TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP NOT NULL,
  "updated_at" TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP NOT NULL,
  CONSTRAINT "fk_identity_passkeycredentials_tenant" FOREIGN KEY ("tenant_id") REFERENCES "tenants"("id") ON DELETE CASCADE
);

CREATE INDEX IF NOT EXISTS "idx_identity_passkeycredentials_tenant" ON "identity_passkeycredentials" ("tenant_id");
CREATE INDEX IF NOT EXISTS "idx_identity_passkeycredentials_status" ON "identity_passkeycredentials" ("status");
CREATE INDEX IF NOT EXISTS "idx_identity_passkeycredentials_created" ON "identity_passkeycredentials" ("created_at");
