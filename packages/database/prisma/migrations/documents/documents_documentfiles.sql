-- Migration: documents_documentfiles
CREATE TABLE IF NOT EXISTS "documents_documentfiles" (
  "id" VARCHAR(64) PRIMARY KEY NOT NULL,
  "tenant_id" VARCHAR(64) NOT NULL,
  "code" VARCHAR(128) NOT NULL,
  "name" VARCHAR(255) NOT NULL,
  "status" VARCHAR(64) DEFAULT 'ACTIVE' NOT NULL,
  "metadata" JSONB DEFAULT '{}'::jsonb NOT NULL,
  "created_at" TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP NOT NULL,
  "updated_at" TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP NOT NULL,
  CONSTRAINT "fk_documents_documentfiles_tenant" FOREIGN KEY ("tenant_id") REFERENCES "tenants"("id") ON DELETE CASCADE
);

CREATE INDEX IF NOT EXISTS "idx_documents_documentfiles_tenant" ON "documents_documentfiles" ("tenant_id");
CREATE INDEX IF NOT EXISTS "idx_documents_documentfiles_status" ON "documents_documentfiles" ("status");
CREATE INDEX IF NOT EXISTS "idx_documents_documentfiles_created" ON "documents_documentfiles" ("created_at");
