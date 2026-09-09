export function generateCrmDealsSessionMock(id: string): Record<string, any> {
  return {
    id,
    domain: "crm_deals",
    entity: "CrmDealsSession",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
