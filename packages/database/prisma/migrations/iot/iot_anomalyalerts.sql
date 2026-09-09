-- Migration: iot_anomalyalerts
CREATE TABLE IF NOT EXISTS "iot_anomalyalerts" (
  "id" VARCHAR(64) PRIMARY KEY NOT NULL,
  "tenant_id" VARCHAR(64) NOT NULL,
  "code" VARCHAR(128) NOT NULL,
  "name" VARCHAR(255) NOT NULL,
  "status" VARCHAR(64) DEFAULT 'ACTIVE' NOT NULL,
  "metadata" JSONB DEFAULT '{}'::jsonb NOT NULL,
  "created_at" TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP NOT NULL,
  "updated_at" TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP NOT NULL,
  CONSTRAINT "fk_iot_anomalyalerts_tenant" FOREIGN KEY ("tenant_id") REFERENCES "tenants"("id") ON DELETE CASCADE
);

CREATE INDEX IF NOT EXISTS "idx_iot_anomalyalerts_tenant" ON "iot_anomalyalerts" ("tenant_id");
CREATE INDEX IF NOT EXISTS "idx_iot_anomalyalerts_status" ON "iot_anomalyalerts" ("status");
CREATE INDEX IF NOT EXISTS "idx_iot_anomalyalerts_created" ON "iot_anomalyalerts" ("created_at");
