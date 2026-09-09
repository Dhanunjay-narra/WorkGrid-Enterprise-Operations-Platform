export function generateCrmDealsProfileMock(id: string): Record<string, any> {
  return {
    id,
    domain: "crm_deals",
    entity: "CrmDealsProfile",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
