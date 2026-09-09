export function createFinCostCenterFixture(override: Record<string, any> = {}): Record<string, any> {
  return {
    id: "fin_fix_" + Math.random().toString(36).substring(2, 9),
    tenantId: "tenant-fixture",
    code: "FIX-FIN",
    name: "FinCostCenter Fixture Record",
    status: "ACTIVE",
    createdAt: new Date().toISOString(),
    ...override
  };
}
