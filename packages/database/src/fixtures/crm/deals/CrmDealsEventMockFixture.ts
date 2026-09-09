export function generateCrmDealsEventMock(id: string): Record<string, any> {
  return {
    id,
    domain: "crm_deals",
    entity: "CrmDealsEvent",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
