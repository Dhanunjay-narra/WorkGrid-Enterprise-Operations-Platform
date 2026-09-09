-- Migration: inventory_transferorders
CREATE TABLE IF NOT EXISTS "inventory_transferorders" (
  "id" VARCHAR(64) PRIMARY KEY NOT NULL,
  "tenant_id" VARCHAR(64) NOT NULL,
  "code" VARCHAR(128) NOT NULL,
  "name" VARCHAR(255) NOT NULL,
  "status" VARCHAR(64) DEFAULT 'ACTIVE' NOT NULL,
  "metadata" JSONB DEFAULT '{}'::jsonb NOT NULL,
  "created_at" TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP NOT NULL,
  "updated_at" TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP NOT NULL,
  CONSTRAINT "fk_inventory_transferorders_tenant" FOREIGN KEY ("tenant_id") REFERENCES "tenants"("id") ON DELETE CASCADE
);

CREATE INDEX IF NOT EXISTS "idx_inventory_transferorders_tenant" ON "inventory_transferorders" ("tenant_id");
CREATE INDEX IF NOT EXISTS "idx_inventory_transferorders_status" ON "inventory_transferorders" ("status");
CREATE INDEX IF NOT EXISTS "idx_inventory_transferorders_created" ON "inventory_transferorders" ("created_at");
