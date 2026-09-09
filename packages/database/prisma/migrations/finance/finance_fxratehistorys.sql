-- Migration: finance_fxratehistorys
CREATE TABLE IF NOT EXISTS "finance_fxratehistorys" (
  "id" VARCHAR(64) PRIMARY KEY NOT NULL,
  "tenant_id" VARCHAR(64) NOT NULL,
  "code" VARCHAR(128) NOT NULL,
  "name" VARCHAR(255) NOT NULL,
  "status" VARCHAR(64) DEFAULT 'ACTIVE' NOT NULL,
  "metadata" JSONB DEFAULT '{}'::jsonb NOT NULL,
  "created_at" TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP NOT NULL,
  "updated_at" TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP NOT NULL,
  CONSTRAINT "fk_finance_fxratehistorys_tenant" FOREIGN KEY ("tenant_id") REFERENCES "tenants"("id") ON DELETE CASCADE
);

CREATE INDEX IF NOT EXISTS "idx_finance_fxratehistorys_tenant" ON "finance_fxratehistorys" ("tenant_id");
CREATE INDEX IF NOT EXISTS "idx_finance_fxratehistorys_status" ON "finance_fxratehistorys" ("status");
CREATE INDEX IF NOT EXISTS "idx_finance_fxratehistorys_created" ON "finance_fxratehistorys" ("created_at");
