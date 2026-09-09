export function generateCrmTerritoryTransactionMock(id: string): Record<string, any> {
  return {
    id,
    domain: "crm_territory",
    entity: "CrmTerritoryTransaction",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
