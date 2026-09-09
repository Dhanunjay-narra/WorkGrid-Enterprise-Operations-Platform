-- Migration: inventory_batchserials
CREATE TABLE IF NOT EXISTS "inventory_batchserials" (
  "id" VARCHAR(64) PRIMARY KEY NOT NULL,
  "tenant_id" VARCHAR(64) NOT NULL,
  "code" VARCHAR(128) NOT NULL,
  "name" VARCHAR(255) NOT NULL,
  "status" VARCHAR(64) DEFAULT 'ACTIVE' NOT NULL,
  "metadata" JSONB DEFAULT '{}'::jsonb NOT NULL,
  "created_at" TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP NOT NULL,
  "updated_at" TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP NOT NULL,
  CONSTRAINT "fk_inventory_batchserials_tenant" FOREIGN KEY ("tenant_id") REFERENCES "tenants"("id") ON DELETE CASCADE
);

CREATE INDEX IF NOT EXISTS "idx_inventory_batchserials_tenant" ON "inventory_batchserials" ("tenant_id");
CREATE INDEX IF NOT EXISTS "idx_inventory_batchserials_status" ON "inventory_batchserials" ("status");
CREATE INDEX IF NOT EXISTS "idx_inventory_batchserials_created" ON "inventory_batchserials" ("created_at");
