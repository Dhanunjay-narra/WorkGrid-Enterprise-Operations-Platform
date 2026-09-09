-- Migration: integrations_webhooksubscriptions
CREATE TABLE IF NOT EXISTS "integrations_webhooksubscriptions" (
  "id" VARCHAR(64) PRIMARY KEY NOT NULL,
  "tenant_id" VARCHAR(64) NOT NULL,
  "code" VARCHAR(128) NOT NULL,
  "name" VARCHAR(255) NOT NULL,
  "status" VARCHAR(64) DEFAULT 'ACTIVE' NOT NULL,
  "metadata" JSONB DEFAULT '{}'::jsonb NOT NULL,
  "created_at" TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP NOT NULL,
  "updated_at" TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP NOT NULL,
  CONSTRAINT "fk_integrations_webhooksubscriptions_tenant" FOREIGN KEY ("tenant_id") REFERENCES "tenants"("id") ON DELETE CASCADE
);

CREATE INDEX IF NOT EXISTS "idx_integrations_webhooksubscriptions_tenant" ON "integrations_webhooksubscriptions" ("tenant_id");
CREATE INDEX IF NOT EXISTS "idx_integrations_webhooksubscriptions_status" ON "integrations_webhooksubscriptions" ("status");
CREATE INDEX IF NOT EXISTS "idx_integrations_webhooksubscriptions_created" ON "integrations_webhooksubscriptions" ("created_at");
