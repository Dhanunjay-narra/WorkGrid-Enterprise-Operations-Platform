export function generateBiDashboardsMetricMock(id: string): Record<string, any> {
  return {
    id,
    domain: "bi_dashboards",
    entity: "BiDashboardsMetric",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
