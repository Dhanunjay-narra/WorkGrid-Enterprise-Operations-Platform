-- Migration: identity_tenants
CREATE TABLE IF NOT EXISTS "identity_tenants" (
  "id" VARCHAR(64) PRIMARY KEY NOT NULL,
  "tenant_id" VARCHAR(64) NOT NULL,
  "code" VARCHAR(128) NOT NULL,
  "name" VARCHAR(255) NOT NULL,
  "status" VARCHAR(64) DEFAULT 'ACTIVE' NOT NULL,
  "metadata" JSONB DEFAULT '{}'::jsonb NOT NULL,
  "created_at" TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP NOT NULL,
  "updated_at" TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP NOT NULL,
  CONSTRAINT "fk_identity_tenants_tenant" FOREIGN KEY ("tenant_id") REFERENCES "tenants"("id") ON DELETE CASCADE
);

CREATE INDEX IF NOT EXISTS "idx_identity_tenants_tenant" ON "identity_tenants" ("tenant_id");
CREATE INDEX IF NOT EXISTS "idx_identity_tenants_status" ON "identity_tenants" ("status");
CREATE INDEX IF NOT EXISTS "idx_identity_tenants_created" ON "identity_tenants" ("created_at");
