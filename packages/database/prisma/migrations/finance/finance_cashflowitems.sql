-- Migration: finance_cashflowitems
CREATE TABLE IF NOT EXISTS "finance_cashflowitems" (
  "id" VARCHAR(64) PRIMARY KEY NOT NULL,
  "tenant_id" VARCHAR(64) NOT NULL,
  "code" VARCHAR(128) NOT NULL,
  "name" VARCHAR(255) NOT NULL,
  "status" VARCHAR(64) DEFAULT 'ACTIVE' NOT NULL,
  "metadata" JSONB DEFAULT '{}'::jsonb NOT NULL,
  "created_at" TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP NOT NULL,
  "updated_at" TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP NOT NULL,
  CONSTRAINT "fk_finance_cashflowitems_tenant" FOREIGN KEY ("tenant_id") REFERENCES "tenants"("id") ON DELETE CASCADE
);

CREATE INDEX IF NOT EXISTS "idx_finance_cashflowitems_tenant" ON "finance_cashflowitems" ("tenant_id");
CREATE INDEX IF NOT EXISTS "idx_finance_cashflowitems_status" ON "finance_cashflowitems" ("status");
CREATE INDEX IF NOT EXISTS "idx_finance_cashflowitems_created" ON "finance_cashflowitems" ("created_at");
