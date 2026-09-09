-- Migration: communication_threadreplys
CREATE TABLE IF NOT EXISTS "communication_threadreplys" (
  "id" VARCHAR(64) PRIMARY KEY NOT NULL,
  "tenant_id" VARCHAR(64) NOT NULL,
  "code" VARCHAR(128) NOT NULL,
  "name" VARCHAR(255) NOT NULL,
  "status" VARCHAR(64) DEFAULT 'ACTIVE' NOT NULL,
  "metadata" JSONB DEFAULT '{}'::jsonb NOT NULL,
  "created_at" TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP NOT NULL,
  "updated_at" TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP NOT NULL,
  CONSTRAINT "fk_communication_threadreplys_tenant" FOREIGN KEY ("tenant_id") REFERENCES "tenants"("id") ON DELETE CASCADE
);

CREATE INDEX IF NOT EXISTS "idx_communication_threadreplys_tenant" ON "communication_threadreplys" ("tenant_id");
CREATE INDEX IF NOT EXISTS "idx_communication_threadreplys_status" ON "communication_threadreplys" ("status");
CREATE INDEX IF NOT EXISTS "idx_communication_threadreplys_created" ON "communication_threadreplys" ("created_at");
