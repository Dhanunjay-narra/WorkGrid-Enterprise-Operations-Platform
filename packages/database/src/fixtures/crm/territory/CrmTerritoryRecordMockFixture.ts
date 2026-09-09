export function generateCrmTerritoryRecordMock(id: string): Record<string, any> {
  return {
    id,
    domain: "crm_territory",
    entity: "CrmTerritoryRecord",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
