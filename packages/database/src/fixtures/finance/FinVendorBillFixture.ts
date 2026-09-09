export function createFinVendorBillFixture(override: Record<string, any> = {}): Record<string, any> {
  return {
    id: "fin_fix_" + Math.random().toString(36).substring(2, 9),
    tenantId: "tenant-fixture",
    code: "FIX-FIN",
    name: "FinVendorBill Fixture Record",
    status: "ACTIVE",
    createdAt: new Date().toISOString(),
    ...override
  };
}
