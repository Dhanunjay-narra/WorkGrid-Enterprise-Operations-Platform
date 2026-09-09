export function generateCrmTerritoryEventMock(id: string): Record<string, any> {
  return {
    id,
    domain: "crm_territory",
    entity: "CrmTerritoryEvent",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
