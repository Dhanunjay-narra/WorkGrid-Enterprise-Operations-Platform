export function generateCrmDealsStateMock(id: string): Record<string, any> {
  return {
    id,
    domain: "crm_deals",
    entity: "CrmDealsState",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
