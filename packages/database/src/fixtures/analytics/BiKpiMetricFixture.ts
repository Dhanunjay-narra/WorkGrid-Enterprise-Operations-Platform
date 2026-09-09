export function createBiKpiMetricFixture(override: Record<string, any> = {}): Record<string, any> {
  return {
    id: "ana_fix_" + Math.random().toString(36).substring(2, 9),
    tenantId: "tenant-fixture",
    code: "FIX-BI",
    name: "BiKpiMetric Fixture Record",
    status: "ACTIVE",
    createdAt: new Date().toISOString(),
    ...override
  };
}
