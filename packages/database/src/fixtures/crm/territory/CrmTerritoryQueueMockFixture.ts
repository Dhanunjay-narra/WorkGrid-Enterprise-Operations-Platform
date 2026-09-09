export function generateCrmTerritoryQueueMock(id: string): Record<string, any> {
  return {
    id,
    domain: "crm_territory",
    entity: "CrmTerritoryQueue",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
