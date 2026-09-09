-- Migration: documents_ocrextracteddatas
CREATE TABLE IF NOT EXISTS "documents_ocrextracteddatas" (
  "id" VARCHAR(64) PRIMARY KEY NOT NULL,
  "tenant_id" VARCHAR(64) NOT NULL,
  "code" VARCHAR(128) NOT NULL,
  "name" VARCHAR(255) NOT NULL,
  "status" VARCHAR(64) DEFAULT 'ACTIVE' NOT NULL,
  "metadata" JSONB DEFAULT '{}'::jsonb NOT NULL,
  "created_at" TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP NOT NULL,
  "updated_at" TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP NOT NULL,
  CONSTRAINT "fk_documents_ocrextracteddatas_tenant" FOREIGN KEY ("tenant_id") REFERENCES "tenants"("id") ON DELETE CASCADE
);

CREATE INDEX IF NOT EXISTS "idx_documents_ocrextracteddatas_tenant" ON "documents_ocrextracteddatas" ("tenant_id");
CREATE INDEX IF NOT EXISTS "idx_documents_ocrextracteddatas_status" ON "documents_ocrextracteddatas" ("status");
CREATE INDEX IF NOT EXISTS "idx_documents_ocrextracteddatas_created" ON "documents_ocrextracteddatas" ("created_at");
