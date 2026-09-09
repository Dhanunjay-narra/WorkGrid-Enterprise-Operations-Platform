-- Migration: integrations_syncqueueitems
CREATE TABLE IF NOT EXISTS "integrations_syncqueueitems" (
  "id" VARCHAR(64) PRIMARY KEY NOT NULL,
  "tenant_id" VARCHAR(64) NOT NULL,
  "code" VARCHAR(128) NOT NULL,
  "name" VARCHAR(255) NOT NULL,
  "status" VARCHAR(64) DEFAULT 'ACTIVE' NOT NULL,
  "metadata" JSONB DEFAULT '{}'::jsonb NOT NULL,
  "created_at" TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP NOT NULL,
  "updated_at" TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP NOT NULL,
  CONSTRAINT "fk_integrations_syncqueueitems_tenant" FOREIGN KEY ("tenant_id") REFERENCES "tenants"("id") ON DELETE CASCADE
);

CREATE INDEX IF NOT EXISTS "idx_integrations_syncqueueitems_tenant" ON "integrations_syncqueueitems" ("tenant_id");
CREATE INDEX IF NOT EXISTS "idx_integrations_syncqueueitems_status" ON "integrations_syncqueueitems" ("status");
CREATE INDEX IF NOT EXISTS "idx_integrations_syncqueueitems_created" ON "integrations_syncqueueitems" ("created_at");
