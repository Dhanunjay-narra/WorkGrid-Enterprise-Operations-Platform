export function generateCrmDealsThresholdMock(id: string): Record<string, any> {
  return {
    id,
    domain: "crm_deals",
    entity: "CrmDealsThreshold",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
