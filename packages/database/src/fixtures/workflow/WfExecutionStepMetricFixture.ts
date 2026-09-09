export function createWfExecutionStepMetricFixture(override: Record<string, any> = {}): Record<string, any> {
  return {
    id: "wor_fix_" + Math.random().toString(36).substring(2, 9),
    tenantId: "tenant-fixture",
    code: "FIX-WF",
    name: "WfExecutionStepMetric Fixture Record",
    status: "ACTIVE",
    createdAt: new Date().toISOString(),
    ...override
  };
}
