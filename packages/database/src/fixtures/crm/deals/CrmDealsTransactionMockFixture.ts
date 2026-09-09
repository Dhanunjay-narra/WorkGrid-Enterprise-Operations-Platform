export function generateCrmDealsTransactionMock(id: string): Record<string, any> {
  return {
    id,
    domain: "crm_deals",
    entity: "CrmDealsTransaction",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
