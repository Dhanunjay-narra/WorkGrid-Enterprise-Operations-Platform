export function generateCrmDealsEntryMock(id: string): Record<string, any> {
  return {
    id,
    domain: "crm_deals",
    entity: "CrmDealsEntry",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
