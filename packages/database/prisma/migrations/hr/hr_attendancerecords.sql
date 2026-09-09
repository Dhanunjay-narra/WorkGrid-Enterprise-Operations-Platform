-- Migration: hr_attendancerecords
CREATE TABLE IF NOT EXISTS "hr_attendancerecords" (
  "id" VARCHAR(64) PRIMARY KEY NOT NULL,
  "tenant_id" VARCHAR(64) NOT NULL,
  "code" VARCHAR(128) NOT NULL,
  "name" VARCHAR(255) NOT NULL,
  "status" VARCHAR(64) DEFAULT 'ACTIVE' NOT NULL,
  "metadata" JSONB DEFAULT '{}'::jsonb NOT NULL,
  "created_at" TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP NOT NULL,
  "updated_at" TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP NOT NULL,
  CONSTRAINT "fk_hr_attendancerecords_tenant" FOREIGN KEY ("tenant_id") REFERENCES "tenants"("id") ON DELETE CASCADE
);

CREATE INDEX IF NOT EXISTS "idx_hr_attendancerecords_tenant" ON "hr_attendancerecords" ("tenant_id");
CREATE INDEX IF NOT EXISTS "idx_hr_attendancerecords_status" ON "hr_attendancerecords" ("status");
CREATE INDEX IF NOT EXISTS "idx_hr_attendancerecords_created" ON "hr_attendancerecords" ("created_at");
