-- Migration: support_knowledgearticles
CREATE TABLE IF NOT EXISTS "support_knowledgearticles" (
  "id" VARCHAR(64) PRIMARY KEY NOT NULL,
  "tenant_id" VARCHAR(64) NOT NULL,
  "code" VARCHAR(128) NOT NULL,
  "name" VARCHAR(255) NOT NULL,
  "status" VARCHAR(64) DEFAULT 'ACTIVE' NOT NULL,
  "metadata" JSONB DEFAULT '{}'::jsonb NOT NULL,
  "created_at" TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP NOT NULL,
  "updated_at" TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP NOT NULL,
  CONSTRAINT "fk_support_knowledgearticles_tenant" FOREIGN KEY ("tenant_id") REFERENCES "tenants"("id") ON DELETE CASCADE
);

CREATE INDEX IF NOT EXISTS "idx_support_knowledgearticles_tenant" ON "support_knowledgearticles" ("tenant_id");
CREATE INDEX IF NOT EXISTS "idx_support_knowledgearticles_status" ON "support_knowledgearticles" ("status");
CREATE INDEX IF NOT EXISTS "idx_support_knowledgearticles_created" ON "support_knowledgearticles" ("created_at");
