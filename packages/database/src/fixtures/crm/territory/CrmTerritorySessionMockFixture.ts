export function generateCrmTerritorySessionMock(id: string): Record<string, any> {
  return {
    id,
    domain: "crm_territory",
    entity: "CrmTerritorySession",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
