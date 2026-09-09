-- Migration: security_devicetrustrecords
CREATE TABLE IF NOT EXISTS "security_devicetrustrecords" (
  "id" VARCHAR(64) PRIMARY KEY NOT NULL,
  "tenant_id" VARCHAR(64) NOT NULL,
  "code" VARCHAR(128) NOT NULL,
  "name" VARCHAR(255) NOT NULL,
  "status" VARCHAR(64) DEFAULT 'ACTIVE' NOT NULL,
  "metadata" JSONB DEFAULT '{}'::jsonb NOT NULL,
  "created_at" TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP NOT NULL,
  "updated_at" TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP NOT NULL,
  CONSTRAINT "fk_security_devicetrustrecords_tenant" FOREIGN KEY ("tenant_id") REFERENCES "tenants"("id") ON DELETE CASCADE
);

CREATE INDEX IF NOT EXISTS "idx_security_devicetrustrecords_tenant" ON "security_devicetrustrecords" ("tenant_id");
CREATE INDEX IF NOT EXISTS "idx_security_devicetrustrecords_status" ON "security_devicetrustrecords" ("status");
CREATE INDEX IF NOT EXISTS "idx_security_devicetrustrecords_created" ON "security_devicetrustrecords" ("created_at");
