-- Migration: inventory_stockaudits
CREATE TABLE IF NOT EXISTS "inventory_stockaudits" (
  "id" VARCHAR(64) PRIMARY KEY NOT NULL,
  "tenant_id" VARCHAR(64) NOT NULL,
  "code" VARCHAR(128) NOT NULL,
  "name" VARCHAR(255) NOT NULL,
  "status" VARCHAR(64) DEFAULT 'ACTIVE' NOT NULL,
  "metadata" JSONB DEFAULT '{}'::jsonb NOT NULL,
  "created_at" TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP NOT NULL,
  "updated_at" TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP NOT NULL,
  CONSTRAINT "fk_inventory_stockaudits_tenant" FOREIGN KEY ("tenant_id") REFERENCES "tenants"("id") ON DELETE CASCADE
);

CREATE INDEX IF NOT EXISTS "idx_inventory_stockaudits_tenant" ON "inventory_stockaudits" ("tenant_id");
CREATE INDEX IF NOT EXISTS "idx_inventory_stockaudits_status" ON "inventory_stockaudits" ("status");
CREATE INDEX IF NOT EXISTS "idx_inventory_stockaudits_created" ON "inventory_stockaudits" ("created_at");
