export function createIntAdapterTelemetryFixture(override: Record<string, any> = {}): Record<string, any> {
  return {
    id: "int_fix_" + Math.random().toString(36).substring(2, 9),
    tenantId: "tenant-fixture",
    code: "FIX-INT",
    name: "IntAdapterTelemetry Fixture Record",
    status: "ACTIVE",
    createdAt: new Date().toISOString(),
    ...override
  };
}
