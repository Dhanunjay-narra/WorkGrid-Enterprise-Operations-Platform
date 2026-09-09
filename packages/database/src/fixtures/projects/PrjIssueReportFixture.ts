export function createPrjIssueReportFixture(override: Record<string, any> = {}): Record<string, any> {
  return {
    id: "pro_fix_" + Math.random().toString(36).substring(2, 9),
    tenantId: "tenant-fixture",
    code: "FIX-PRJ",
    name: "PrjIssueReport Fixture Record",
    status: "ACTIVE",
    createdAt: new Date().toISOString(),
    ...override
  };
}
