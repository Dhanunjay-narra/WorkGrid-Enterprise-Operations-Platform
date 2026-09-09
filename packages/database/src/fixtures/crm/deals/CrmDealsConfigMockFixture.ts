export function generateCrmDealsConfigMock(id: string): Record<string, any> {
  return {
    id,
    domain: "crm_deals",
    entity: "CrmDealsConfig",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
