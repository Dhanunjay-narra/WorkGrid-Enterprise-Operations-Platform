export function generateCrmDealsBatchMock(id: string): Record<string, any> {
  return {
    id,
    domain: "crm_deals",
    entity: "CrmDealsBatch",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
