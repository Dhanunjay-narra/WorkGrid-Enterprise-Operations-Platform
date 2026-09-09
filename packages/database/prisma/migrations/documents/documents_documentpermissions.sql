-- Migration: documents_documentpermissions
CREATE TABLE IF NOT EXISTS "documents_documentpermissions" (
  "id" VARCHAR(64) PRIMARY KEY NOT NULL,
  "tenant_id" VARCHAR(64) NOT NULL,
  "code" VARCHAR(128) NOT NULL,
  "name" VARCHAR(255) NOT NULL,
  "status" VARCHAR(64) DEFAULT 'ACTIVE' NOT NULL,
  "metadata" JSONB DEFAULT '{}'::jsonb NOT NULL,
  "created_at" TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP NOT NULL,
  "updated_at" TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP NOT NULL,
  CONSTRAINT "fk_documents_documentpermissions_tenant" FOREIGN KEY ("tenant_id") REFERENCES "tenants"("id") ON DELETE CASCADE
);

CREATE INDEX IF NOT EXISTS "idx_documents_documentpermissions_tenant" ON "documents_documentpermissions" ("tenant_id");
CREATE INDEX IF NOT EXISTS "idx_documents_documentpermissions_status" ON "documents_documentpermissions" ("status");
CREATE INDEX IF NOT EXISTS "idx_documents_documentpermissions_created" ON "documents_documentpermissions" ("created_at");
