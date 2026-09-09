export function generateCrmTerritoryBatchMock(id: string): Record<string, any> {
  return {
    id,
    domain: "crm_territory",
    entity: "CrmTerritoryBatch",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
