export function createCrmCustomerHealthFixture(override: Record<string, any> = {}): Record<string, any> {
  return {
    id: "crm_fix_" + Math.random().toString(36).substring(2, 9),
    tenantId: "tenant-fixture",
    code: "FIX-CRM",
    name: "CrmCustomerHealth Fixture Record",
    status: "ACTIVE",
    createdAt: new Date().toISOString(),
    ...override
  };
}
