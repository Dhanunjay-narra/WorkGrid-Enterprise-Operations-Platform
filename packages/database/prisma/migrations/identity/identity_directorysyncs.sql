-- Migration: identity_directorysyncs
CREATE TABLE IF NOT EXISTS "identity_directorysyncs" (
  "id" VARCHAR(64) PRIMARY KEY NOT NULL,
  "tenant_id" VARCHAR(64) NOT NULL,
  "code" VARCHAR(128) NOT NULL,
  "name" VARCHAR(255) NOT NULL,
  "status" VARCHAR(64) DEFAULT 'ACTIVE' NOT NULL,
  "metadata" JSONB DEFAULT '{}'::jsonb NOT NULL,
  "created_at" TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP NOT NULL,
  "updated_at" TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP NOT NULL,
  CONSTRAINT "fk_identity_directorysyncs_tenant" FOREIGN KEY ("tenant_id") REFERENCES "tenants"("id") ON DELETE CASCADE
);

CREATE INDEX IF NOT EXISTS "idx_identity_directorysyncs_tenant" ON "identity_directorysyncs" ("tenant_id");
CREATE INDEX IF NOT EXISTS "idx_identity_directorysyncs_status" ON "identity_directorysyncs" ("status");
CREATE INDEX IF NOT EXISTS "idx_identity_directorysyncs_created" ON "identity_directorysyncs" ("created_at");
