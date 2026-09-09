-- Migration: security_secretmetadatas
CREATE TABLE IF NOT EXISTS "security_secretmetadatas" (
  "id" VARCHAR(64) PRIMARY KEY NOT NULL,
  "tenant_id" VARCHAR(64) NOT NULL,
  "code" VARCHAR(128) NOT NULL,
  "name" VARCHAR(255) NOT NULL,
  "status" VARCHAR(64) DEFAULT 'ACTIVE' NOT NULL,
  "metadata" JSONB DEFAULT '{}'::jsonb NOT NULL,
  "created_at" TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP NOT NULL,
  "updated_at" TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP NOT NULL,
  CONSTRAINT "fk_security_secretmetadatas_tenant" FOREIGN KEY ("tenant_id") REFERENCES "tenants"("id") ON DELETE CASCADE
);

CREATE INDEX IF NOT EXISTS "idx_security_secretmetadatas_tenant" ON "security_secretmetadatas" ("tenant_id");
CREATE INDEX IF NOT EXISTS "idx_security_secretmetadatas_status" ON "security_secretmetadatas" ("status");
CREATE INDEX IF NOT EXISTS "idx_security_secretmetadatas_created" ON "security_secretmetadatas" ("created_at");
