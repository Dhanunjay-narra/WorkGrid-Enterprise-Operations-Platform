export function generateCrmDealsRuleMock(id: string): Record<string, any> {
  return {
    id,
    domain: "crm_deals",
    entity: "CrmDealsRule",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
