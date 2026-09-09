-- Migration: iot_heartbeatrecords
CREATE TABLE IF NOT EXISTS "iot_heartbeatrecords" (
  "id" VARCHAR(64) PRIMARY KEY NOT NULL,
  "tenant_id" VARCHAR(64) NOT NULL,
  "code" VARCHAR(128) NOT NULL,
  "name" VARCHAR(255) NOT NULL,
  "status" VARCHAR(64) DEFAULT 'ACTIVE' NOT NULL,
  "metadata" JSONB DEFAULT '{}'::jsonb NOT NULL,
  "created_at" TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP NOT NULL,
  "updated_at" TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP NOT NULL,
  CONSTRAINT "fk_iot_heartbeatrecords_tenant" FOREIGN KEY ("tenant_id") REFERENCES "tenants"("id") ON DELETE CASCADE
);

CREATE INDEX IF NOT EXISTS "idx_iot_heartbeatrecords_tenant" ON "iot_heartbeatrecords" ("tenant_id");
CREATE INDEX IF NOT EXISTS "idx_iot_heartbeatrecords_status" ON "iot_heartbeatrecords" ("status");
CREATE INDEX IF NOT EXISTS "idx_iot_heartbeatrecords_created" ON "iot_heartbeatrecords" ("created_at");
