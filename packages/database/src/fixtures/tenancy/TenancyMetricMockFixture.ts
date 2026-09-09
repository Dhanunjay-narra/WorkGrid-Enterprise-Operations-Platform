export function generateTenancyMetricMock(id: string): Record<string, any> {
  return {
    id,
    domain: "tenancy",
    entity: "TenancyMetric",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
