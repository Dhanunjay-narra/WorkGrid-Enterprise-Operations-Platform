export function generateCrmHealthMetricMock(id: string): Record<string, any> {
  return {
    id,
    domain: "crm_health",
    entity: "CrmHealthMetric",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
