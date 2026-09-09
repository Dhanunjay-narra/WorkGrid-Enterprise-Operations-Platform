export function createCrmTerritoryFixture(override: Record<string, any> = {}): Record<string, any> {
  return {
    id: "crm_fix_" + Math.random().toString(36).substring(2, 9),
    tenantId: "tenant-fixture",
    code: "FIX-CRM",
    name: "CrmTerritory Fixture Record",
    status: "ACTIVE",
    createdAt: new Date().toISOString(),
    ...override
  };
}
