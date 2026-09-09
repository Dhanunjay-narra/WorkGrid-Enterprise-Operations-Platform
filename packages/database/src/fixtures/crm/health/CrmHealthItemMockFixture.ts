export function generateCrmHealthItemMock(id: string): Record<string, any> {
  return {
    id,
    domain: "crm_health",
    entity: "CrmHealthItem",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
