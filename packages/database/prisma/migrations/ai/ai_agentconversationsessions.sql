-- Migration: ai_agentconversationsessions
CREATE TABLE IF NOT EXISTS "ai_agentconversationsessions" (
  "id" VARCHAR(64) PRIMARY KEY NOT NULL,
  "tenant_id" VARCHAR(64) NOT NULL,
  "code" VARCHAR(128) NOT NULL,
  "name" VARCHAR(255) NOT NULL,
  "status" VARCHAR(64) DEFAULT 'ACTIVE' NOT NULL,
  "metadata" JSONB DEFAULT '{}'::jsonb NOT NULL,
  "created_at" TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP NOT NULL,
  "updated_at" TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP NOT NULL,
  CONSTRAINT "fk_ai_agentconversationsessions_tenant" FOREIGN KEY ("tenant_id") REFERENCES "tenants"("id") ON DELETE CASCADE
);

CREATE INDEX IF NOT EXISTS "idx_ai_agentconversationsessions_tenant" ON "ai_agentconversationsessions" ("tenant_id");
CREATE INDEX IF NOT EXISTS "idx_ai_agentconversationsessions_status" ON "ai_agentconversationsessions" ("status");
CREATE INDEX IF NOT EXISTS "idx_ai_agentconversationsessions_created" ON "ai_agentconversationsessions" ("created_at");
