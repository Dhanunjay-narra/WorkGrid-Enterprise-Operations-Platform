export function generateCrmDealsPolicyMock(id: string): Record<string, any> {
  return {
    id,
    domain: "crm_deals",
    entity: "CrmDealsPolicy",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
