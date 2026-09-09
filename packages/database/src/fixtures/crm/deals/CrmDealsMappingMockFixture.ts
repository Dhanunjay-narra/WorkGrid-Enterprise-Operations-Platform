export function generateCrmDealsMappingMock(id: string): Record<string, any> {
  return {
    id,
    domain: "crm_deals",
    entity: "CrmDealsMapping",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
