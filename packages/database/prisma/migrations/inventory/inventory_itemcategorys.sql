-- Migration: inventory_itemcategorys
CREATE TABLE IF NOT EXISTS "inventory_itemcategorys" (
  "id" VARCHAR(64) PRIMARY KEY NOT NULL,
  "tenant_id" VARCHAR(64) NOT NULL,
  "code" VARCHAR(128) NOT NULL,
  "name" VARCHAR(255) NOT NULL,
  "status" VARCHAR(64) DEFAULT 'ACTIVE' NOT NULL,
  "metadata" JSONB DEFAULT '{}'::jsonb NOT NULL,
  "created_at" TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP NOT NULL,
  "updated_at" TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP NOT NULL,
  CONSTRAINT "fk_inventory_itemcategorys_tenant" FOREIGN KEY ("tenant_id") REFERENCES "tenants"("id") ON DELETE CASCADE
);

CREATE INDEX IF NOT EXISTS "idx_inventory_itemcategorys_tenant" ON "inventory_itemcategorys" ("tenant_id");
CREATE INDEX IF NOT EXISTS "idx_inventory_itemcategorys_status" ON "inventory_itemcategorys" ("status");
CREATE INDEX IF NOT EXISTS "idx_inventory_itemcategorys_created" ON "inventory_itemcategorys" ("created_at");
