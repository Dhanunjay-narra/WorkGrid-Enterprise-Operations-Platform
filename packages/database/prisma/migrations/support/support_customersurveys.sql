-- Migration: support_customersurveys
CREATE TABLE IF NOT EXISTS "support_customersurveys" (
  "id" VARCHAR(64) PRIMARY KEY NOT NULL,
  "tenant_id" VARCHAR(64) NOT NULL,
  "code" VARCHAR(128) NOT NULL,
  "name" VARCHAR(255) NOT NULL,
  "status" VARCHAR(64) DEFAULT 'ACTIVE' NOT NULL,
  "metadata" JSONB DEFAULT '{}'::jsonb NOT NULL,
  "created_at" TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP NOT NULL,
  "updated_at" TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP NOT NULL,
  CONSTRAINT "fk_support_customersurveys_tenant" FOREIGN KEY ("tenant_id") REFERENCES "tenants"("id") ON DELETE CASCADE
);

CREATE INDEX IF NOT EXISTS "idx_support_customersurveys_tenant" ON "support_customersurveys" ("tenant_id");
CREATE INDEX IF NOT EXISTS "idx_support_customersurveys_status" ON "support_customersurveys" ("status");
CREATE INDEX IF NOT EXISTS "idx_support_customersurveys_created" ON "support_customersurveys" ("created_at");
