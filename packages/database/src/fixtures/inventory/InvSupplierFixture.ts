export function createInvSupplierFixture(override: Record<string, any> = {}): Record<string, any> {
  return {
    id: "inv_fix_" + Math.random().toString(36).substring(2, 9),
    tenantId: "tenant-fixture",
    code: "FIX-INV",
    name: "InvSupplier Fixture Record",
    status: "ACTIVE",
    createdAt: new Date().toISOString(),
    ...override
  };
}
