-- Migration: iot_devicelocations
CREATE TABLE IF NOT EXISTS "iot_devicelocations" (
  "id" VARCHAR(64) PRIMARY KEY NOT NULL,
  "tenant_id" VARCHAR(64) NOT NULL,
  "code" VARCHAR(128) NOT NULL,
  "name" VARCHAR(255) NOT NULL,
  "status" VARCHAR(64) DEFAULT 'ACTIVE' NOT NULL,
  "metadata" JSONB DEFAULT '{}'::jsonb NOT NULL,
  "created_at" TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP NOT NULL,
  "updated_at" TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP NOT NULL,
  CONSTRAINT "fk_iot_devicelocations_tenant" FOREIGN KEY ("tenant_id") REFERENCES "tenants"("id") ON DELETE CASCADE
);

CREATE INDEX IF NOT EXISTS "idx_iot_devicelocations_tenant" ON "iot_devicelocations" ("tenant_id");
CREATE INDEX IF NOT EXISTS "idx_iot_devicelocations_status" ON "iot_devicelocations" ("status");
CREATE INDEX IF NOT EXISTS "idx_iot_devicelocations_created" ON "iot_devicelocations" ("created_at");
