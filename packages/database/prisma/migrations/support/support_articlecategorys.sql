-- Migration: support_articlecategorys
CREATE TABLE IF NOT EXISTS "support_articlecategorys" (
  "id" VARCHAR(64) PRIMARY KEY NOT NULL,
  "tenant_id" VARCHAR(64) NOT NULL,
  "code" VARCHAR(128) NOT NULL,
  "name" VARCHAR(255) NOT NULL,
  "status" VARCHAR(64) DEFAULT 'ACTIVE' NOT NULL,
  "metadata" JSONB DEFAULT '{}'::jsonb NOT NULL,
  "created_at" TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP NOT NULL,
  "updated_at" TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP NOT NULL,
  CONSTRAINT "fk_support_articlecategorys_tenant" FOREIGN KEY ("tenant_id") REFERENCES "tenants"("id") ON DELETE CASCADE
);

CREATE INDEX IF NOT EXISTS "idx_support_articlecategorys_tenant" ON "support_articlecategorys" ("tenant_id");
CREATE INDEX IF NOT EXISTS "idx_support_articlecategorys_status" ON "support_articlecategorys" ("status");
CREATE INDEX IF NOT EXISTS "idx_support_articlecategorys_created" ON "support_articlecategorys" ("created_at");
