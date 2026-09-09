-- Migration: inventory_stocklevels
CREATE TABLE IF NOT EXISTS "inventory_stocklevels" (
  "id" VARCHAR(64) PRIMARY KEY NOT NULL,
  "tenant_id" VARCHAR(64) NOT NULL,
  "code" VARCHAR(128) NOT NULL,
  "name" VARCHAR(255) NOT NULL,
  "status" VARCHAR(64) DEFAULT 'ACTIVE' NOT NULL,
  "metadata" JSONB DEFAULT '{}'::jsonb NOT NULL,
  "created_at" TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP NOT NULL,
  "updated_at" TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP NOT NULL,
  CONSTRAINT "fk_inventory_stocklevels_tenant" FOREIGN KEY ("tenant_id") REFERENCES "tenants"("id") ON DELETE CASCADE
);

CREATE INDEX IF NOT EXISTS "idx_inventory_stocklevels_tenant" ON "inventory_stocklevels" ("tenant_id");
CREATE INDEX IF NOT EXISTS "idx_inventory_stocklevels_status" ON "inventory_stocklevels" ("status");
CREATE INDEX IF NOT EXISTS "idx_inventory_stocklevels_created" ON "inventory_stocklevels" ("created_at");
