export function generateCrmDealsMetricMock(id: string): Record<string, any> {
  return {
    id,
    domain: "crm_deals",
    entity: "CrmDealsMetric",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
