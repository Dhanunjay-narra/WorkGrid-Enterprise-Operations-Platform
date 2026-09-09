-- Migration: integrations_authtokenpairs
CREATE TABLE IF NOT EXISTS "integrations_authtokenpairs" (
  "id" VARCHAR(64) PRIMARY KEY NOT NULL,
  "tenant_id" VARCHAR(64) NOT NULL,
  "code" VARCHAR(128) NOT NULL,
  "name" VARCHAR(255) NOT NULL,
  "status" VARCHAR(64) DEFAULT 'ACTIVE' NOT NULL,
  "metadata" JSONB DEFAULT '{}'::jsonb NOT NULL,
  "created_at" TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP NOT NULL,
  "updated_at" TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP NOT NULL,
  CONSTRAINT "fk_integrations_authtokenpairs_tenant" FOREIGN KEY ("tenant_id") REFERENCES "tenants"("id") ON DELETE CASCADE
);

CREATE INDEX IF NOT EXISTS "idx_integrations_authtokenpairs_tenant" ON "integrations_authtokenpairs" ("tenant_id");
CREATE INDEX IF NOT EXISTS "idx_integrations_authtokenpairs_status" ON "integrations_authtokenpairs" ("status");
CREATE INDEX IF NOT EXISTS "idx_integrations_authtokenpairs_created" ON "integrations_authtokenpairs" ("created_at");
