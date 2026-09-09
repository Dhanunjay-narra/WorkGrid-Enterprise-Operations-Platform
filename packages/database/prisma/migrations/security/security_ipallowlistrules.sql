-- Migration: security_ipallowlistrules
CREATE TABLE IF NOT EXISTS "security_ipallowlistrules" (
  "id" VARCHAR(64) PRIMARY KEY NOT NULL,
  "tenant_id" VARCHAR(64) NOT NULL,
  "code" VARCHAR(128) NOT NULL,
  "name" VARCHAR(255) NOT NULL,
  "status" VARCHAR(64) DEFAULT 'ACTIVE' NOT NULL,
  "metadata" JSONB DEFAULT '{}'::jsonb NOT NULL,
  "created_at" TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP NOT NULL,
  "updated_at" TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP NOT NULL,
  CONSTRAINT "fk_security_ipallowlistrules_tenant" FOREIGN KEY ("tenant_id") REFERENCES "tenants"("id") ON DELETE CASCADE
);

CREATE INDEX IF NOT EXISTS "idx_security_ipallowlistrules_tenant" ON "security_ipallowlistrules" ("tenant_id");
CREATE INDEX IF NOT EXISTS "idx_security_ipallowlistrules_status" ON "security_ipallowlistrules" ("status");
CREATE INDEX IF NOT EXISTS "idx_security_ipallowlistrules_created" ON "security_ipallowlistrules" ("created_at");
