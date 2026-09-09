-- Migration: identity_mfaconfigs
CREATE TABLE IF NOT EXISTS "identity_mfaconfigs" (
  "id" VARCHAR(64) PRIMARY KEY NOT NULL,
  "tenant_id" VARCHAR(64) NOT NULL,
  "code" VARCHAR(128) NOT NULL,
  "name" VARCHAR(255) NOT NULL,
  "status" VARCHAR(64) DEFAULT 'ACTIVE' NOT NULL,
  "metadata" JSONB DEFAULT '{}'::jsonb NOT NULL,
  "created_at" TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP NOT NULL,
  "updated_at" TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP NOT NULL,
  CONSTRAINT "fk_identity_mfaconfigs_tenant" FOREIGN KEY ("tenant_id") REFERENCES "tenants"("id") ON DELETE CASCADE
);

CREATE INDEX IF NOT EXISTS "idx_identity_mfaconfigs_tenant" ON "identity_mfaconfigs" ("tenant_id");
CREATE INDEX IF NOT EXISTS "idx_identity_mfaconfigs_status" ON "identity_mfaconfigs" ("status");
CREATE INDEX IF NOT EXISTS "idx_identity_mfaconfigs_created" ON "identity_mfaconfigs" ("created_at");
