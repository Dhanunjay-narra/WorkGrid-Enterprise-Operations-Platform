export function generateCrmTerritoryEntryMock(id: string): Record<string, any> {
  return {
    id,
    domain: "crm_territory",
    entity: "CrmTerritoryEntry",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
