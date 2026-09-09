-- Migration: iot_sensorcalibrations
CREATE TABLE IF NOT EXISTS "iot_sensorcalibrations" (
  "id" VARCHAR(64) PRIMARY KEY NOT NULL,
  "tenant_id" VARCHAR(64) NOT NULL,
  "code" VARCHAR(128) NOT NULL,
  "name" VARCHAR(255) NOT NULL,
  "status" VARCHAR(64) DEFAULT 'ACTIVE' NOT NULL,
  "metadata" JSONB DEFAULT '{}'::jsonb NOT NULL,
  "created_at" TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP NOT NULL,
  "updated_at" TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP NOT NULL,
  CONSTRAINT "fk_iot_sensorcalibrations_tenant" FOREIGN KEY ("tenant_id") REFERENCES "tenants"("id") ON DELETE CASCADE
);

CREATE INDEX IF NOT EXISTS "idx_iot_sensorcalibrations_tenant" ON "iot_sensorcalibrations" ("tenant_id");
CREATE INDEX IF NOT EXISTS "idx_iot_sensorcalibrations_status" ON "iot_sensorcalibrations" ("status");
CREATE INDEX IF NOT EXISTS "idx_iot_sensorcalibrations_created" ON "iot_sensorcalibrations" ("created_at");
