-- Migration: finance_journalentrys
CREATE TABLE IF NOT EXISTS "finance_journalentrys" (
  "id" VARCHAR(64) PRIMARY KEY NOT NULL,
  "tenant_id" VARCHAR(64) NOT NULL,
  "code" VARCHAR(128) NOT NULL,
  "name" VARCHAR(255) NOT NULL,
  "status" VARCHAR(64) DEFAULT 'ACTIVE' NOT NULL,
  "metadata" JSONB DEFAULT '{}'::jsonb NOT NULL,
  "created_at" TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP NOT NULL,
  "updated_at" TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP NOT NULL,
  CONSTRAINT "fk_finance_journalentrys_tenant" FOREIGN KEY ("tenant_id") REFERENCES "tenants"("id") ON DELETE CASCADE
);

CREATE INDEX IF NOT EXISTS "idx_finance_journalentrys_tenant" ON "finance_journalentrys" ("tenant_id");
CREATE INDEX IF NOT EXISTS "idx_finance_journalentrys_status" ON "finance_journalentrys" ("status");
CREATE INDEX IF NOT EXISTS "idx_finance_journalentrys_created" ON "finance_journalentrys" ("created_at");
