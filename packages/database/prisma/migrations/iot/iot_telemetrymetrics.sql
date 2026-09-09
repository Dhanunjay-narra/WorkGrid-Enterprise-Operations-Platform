-- Migration: iot_telemetrymetrics
CREATE TABLE IF NOT EXISTS "iot_telemetrymetrics" (
  "id" VARCHAR(64) PRIMARY KEY NOT NULL,
  "tenant_id" VARCHAR(64) NOT NULL,
  "code" VARCHAR(128) NOT NULL,
  "name" VARCHAR(255) NOT NULL,
  "status" VARCHAR(64) DEFAULT 'ACTIVE' NOT NULL,
  "metadata" JSONB DEFAULT '{}'::jsonb NOT NULL,
  "created_at" TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP NOT NULL,
  "updated_at" TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP NOT NULL,
  CONSTRAINT "fk_iot_telemetrymetrics_tenant" FOREIGN KEY ("tenant_id") REFERENCES "tenants"("id") ON DELETE CASCADE
);

CREATE INDEX IF NOT EXISTS "idx_iot_telemetrymetrics_tenant" ON "iot_telemetrymetrics" ("tenant_id");
CREATE INDEX IF NOT EXISTS "idx_iot_telemetrymetrics_status" ON "iot_telemetrymetrics" ("status");
CREATE INDEX IF NOT EXISTS "idx_iot_telemetrymetrics_created" ON "iot_telemetrymetrics" ("created_at");
