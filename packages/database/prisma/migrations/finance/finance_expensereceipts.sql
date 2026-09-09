-- Migration: finance_expensereceipts
CREATE TABLE IF NOT EXISTS "finance_expensereceipts" (
  "id" VARCHAR(64) PRIMARY KEY NOT NULL,
  "tenant_id" VARCHAR(64) NOT NULL,
  "code" VARCHAR(128) NOT NULL,
  "name" VARCHAR(255) NOT NULL,
  "status" VARCHAR(64) DEFAULT 'ACTIVE' NOT NULL,
  "metadata" JSONB DEFAULT '{}'::jsonb NOT NULL,
  "created_at" TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP NOT NULL,
  "updated_at" TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP NOT NULL,
  CONSTRAINT "fk_finance_expensereceipts_tenant" FOREIGN KEY ("tenant_id") REFERENCES "tenants"("id") ON DELETE CASCADE
);

CREATE INDEX IF NOT EXISTS "idx_finance_expensereceipts_tenant" ON "finance_expensereceipts" ("tenant_id");
CREATE INDEX IF NOT EXISTS "idx_finance_expensereceipts_status" ON "finance_expensereceipts" ("status");
CREATE INDEX IF NOT EXISTS "idx_finance_expensereceipts_created" ON "finance_expensereceipts" ("created_at");
