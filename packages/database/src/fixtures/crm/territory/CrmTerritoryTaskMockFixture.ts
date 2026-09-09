export function generateCrmTerritoryTaskMock(id: string): Record<string, any> {
  return {
    id,
    domain: "crm_territory",
    entity: "CrmTerritoryTask",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
