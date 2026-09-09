export function generateCrmLeadsMetricMock(id: string): Record<string, any> {
  return {
    id,
    domain: "crm_leads",
    entity: "CrmLeadsMetric",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
