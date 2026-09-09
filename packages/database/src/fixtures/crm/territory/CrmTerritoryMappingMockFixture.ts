export function generateCrmTerritoryMappingMock(id: string): Record<string, any> {
  return {
    id,
    domain: "crm_territory",
    entity: "CrmTerritoryMapping",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
