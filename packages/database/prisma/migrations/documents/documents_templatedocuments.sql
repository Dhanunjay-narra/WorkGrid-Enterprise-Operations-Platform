-- Migration: documents_templatedocuments
CREATE TABLE IF NOT EXISTS "documents_templatedocuments" (
  "id" VARCHAR(64) PRIMARY KEY NOT NULL,
  "tenant_id" VARCHAR(64) NOT NULL,
  "code" VARCHAR(128) NOT NULL,
  "name" VARCHAR(255) NOT NULL,
  "status" VARCHAR(64) DEFAULT 'ACTIVE' NOT NULL,
  "metadata" JSONB DEFAULT '{}'::jsonb NOT NULL,
  "created_at" TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP NOT NULL,
  "updated_at" TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP NOT NULL,
  CONSTRAINT "fk_documents_templatedocuments_tenant" FOREIGN KEY ("tenant_id") REFERENCES "tenants"("id") ON DELETE CASCADE
);

CREATE INDEX IF NOT EXISTS "idx_documents_templatedocuments_tenant" ON "documents_templatedocuments" ("tenant_id");
CREATE INDEX IF NOT EXISTS "idx_documents_templatedocuments_status" ON "documents_templatedocuments" ("status");
CREATE INDEX IF NOT EXISTS "idx_documents_templatedocuments_created" ON "documents_templatedocuments" ("created_at");
