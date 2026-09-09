export function createEvtPublishMetricFixture(override: Record<string, any> = {}): Record<string, any> {
  return {
    id: "eve_fix_" + Math.random().toString(36).substring(2, 9),
    tenantId: "tenant-fixture",
    code: "FIX-EVT",
    name: "EvtPublishMetric Fixture Record",
    status: "ACTIVE",
    createdAt: new Date().toISOString(),
    ...override
  };
}
