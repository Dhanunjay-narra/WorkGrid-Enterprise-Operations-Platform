-- Migration: inventory_suppliers
CREATE TABLE IF NOT EXISTS "inventory_suppliers" (
  "id" VARCHAR(64) PRIMARY KEY NOT NULL,
  "tenant_id" VARCHAR(64) NOT NULL,
  "code" VARCHAR(128) NOT NULL,
  "name" VARCHAR(255) NOT NULL,
  "status" VARCHAR(64) DEFAULT 'ACTIVE' NOT NULL,
  "metadata" JSONB DEFAULT '{}'::jsonb NOT NULL,
  "created_at" TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP NOT NULL,
  "updated_at" TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP NOT NULL,
  CONSTRAINT "fk_inventory_suppliers_tenant" FOREIGN KEY ("tenant_id") REFERENCES "tenants"("id") ON DELETE CASCADE
);

CREATE INDEX IF NOT EXISTS "idx_inventory_suppliers_tenant" ON "inventory_suppliers" ("tenant_id");
CREATE INDEX IF NOT EXISTS "idx_inventory_suppliers_status" ON "inventory_suppliers" ("status");
CREATE INDEX IF NOT EXISTS "idx_inventory_suppliers_created" ON "inventory_suppliers" ("created_at");
