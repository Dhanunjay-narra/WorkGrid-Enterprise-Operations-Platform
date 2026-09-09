export function generateCrmDealsNodeMock(id: string): Record<string, any> {
  return {
    id,
    domain: "crm_deals",
    entity: "CrmDealsNode",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
