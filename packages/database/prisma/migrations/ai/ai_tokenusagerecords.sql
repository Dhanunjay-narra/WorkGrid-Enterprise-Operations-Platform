-- Migration: ai_tokenusagerecords
CREATE TABLE IF NOT EXISTS "ai_tokenusagerecords" (
  "id" VARCHAR(64) PRIMARY KEY NOT NULL,
  "tenant_id" VARCHAR(64) NOT NULL,
  "code" VARCHAR(128) NOT NULL,
  "name" VARCHAR(255) NOT NULL,
  "status" VARCHAR(64) DEFAULT 'ACTIVE' NOT NULL,
  "metadata" JSONB DEFAULT '{}'::jsonb NOT NULL,
  "created_at" TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP NOT NULL,
  "updated_at" TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP NOT NULL,
  CONSTRAINT "fk_ai_tokenusagerecords_tenant" FOREIGN KEY ("tenant_id") REFERENCES "tenants"("id") ON DELETE CASCADE
);

CREATE INDEX IF NOT EXISTS "idx_ai_tokenusagerecords_tenant" ON "ai_tokenusagerecords" ("tenant_id");
CREATE INDEX IF NOT EXISTS "idx_ai_tokenusagerecords_status" ON "ai_tokenusagerecords" ("status");
CREATE INDEX IF NOT EXISTS "idx_ai_tokenusagerecords_created" ON "ai_tokenusagerecords" ("created_at");
