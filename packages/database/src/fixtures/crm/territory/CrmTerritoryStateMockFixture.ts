export function generateCrmTerritoryStateMock(id: string): Record<string, any> {
  return {
    id,
    domain: "crm_territory",
    entity: "CrmTerritoryState",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
