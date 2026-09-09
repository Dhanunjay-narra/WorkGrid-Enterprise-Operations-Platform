-- Migration: ai_prompttemplates
CREATE TABLE IF NOT EXISTS "ai_prompttemplates" (
  "id" VARCHAR(64) PRIMARY KEY NOT NULL,
  "tenant_id" VARCHAR(64) NOT NULL,
  "code" VARCHAR(128) NOT NULL,
  "name" VARCHAR(255) NOT NULL,
  "status" VARCHAR(64) DEFAULT 'ACTIVE' NOT NULL,
  "metadata" JSONB DEFAULT '{}'::jsonb NOT NULL,
  "created_at" TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP NOT NULL,
  "updated_at" TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP NOT NULL,
  CONSTRAINT "fk_ai_prompttemplates_tenant" FOREIGN KEY ("tenant_id") REFERENCES "tenants"("id") ON DELETE CASCADE
);

CREATE INDEX IF NOT EXISTS "idx_ai_prompttemplates_tenant" ON "ai_prompttemplates" ("tenant_id");
CREATE INDEX IF NOT EXISTS "idx_ai_prompttemplates_status" ON "ai_prompttemplates" ("status");
CREATE INDEX IF NOT EXISTS "idx_ai_prompttemplates_created" ON "ai_prompttemplates" ("created_at");
