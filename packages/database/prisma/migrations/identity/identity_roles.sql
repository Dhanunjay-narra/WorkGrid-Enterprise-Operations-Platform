-- Migration: identity_roles
CREATE TABLE IF NOT EXISTS "identity_roles" (
  "id" VARCHAR(64) PRIMARY KEY NOT NULL,
  "tenant_id" VARCHAR(64) NOT NULL,
  "code" VARCHAR(128) NOT NULL,
  "name" VARCHAR(255) NOT NULL,
  "status" VARCHAR(64) DEFAULT 'ACTIVE' NOT NULL,
  "metadata" JSONB DEFAULT '{}'::jsonb NOT NULL,
  "created_at" TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP NOT NULL,
  "updated_at" TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP NOT NULL,
  CONSTRAINT "fk_identity_roles_tenant" FOREIGN KEY ("tenant_id") REFERENCES "tenants"("id") ON DELETE CASCADE
);

CREATE INDEX IF NOT EXISTS "idx_identity_roles_tenant" ON "identity_roles" ("tenant_id");
CREATE INDEX IF NOT EXISTS "idx_identity_roles_status" ON "identity_roles" ("status");
CREATE INDEX IF NOT EXISTS "idx_identity_roles_created" ON "identity_roles" ("created_at");
