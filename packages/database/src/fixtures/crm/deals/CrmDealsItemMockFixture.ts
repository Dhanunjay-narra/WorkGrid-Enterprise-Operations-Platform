export function generateCrmDealsItemMock(id: string): Record<string, any> {
  return {
    id,
    domain: "crm_deals",
    entity: "CrmDealsItem",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
