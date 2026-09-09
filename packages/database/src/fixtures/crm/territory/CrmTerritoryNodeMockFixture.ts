export function generateCrmTerritoryNodeMock(id: string): Record<string, any> {
  return {
    id,
    domain: "crm_territory",
    entity: "CrmTerritoryNode",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
