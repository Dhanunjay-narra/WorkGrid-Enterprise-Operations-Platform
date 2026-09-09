export function generateCrmTerritoryItemMock(id: string): Record<string, any> {
  return {
    id,
    domain: "crm_territory",
    entity: "CrmTerritoryItem",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
