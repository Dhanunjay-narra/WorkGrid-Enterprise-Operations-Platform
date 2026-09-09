export function generateObsDashboardsMetricMock(id: string): Record<string, any> {
  return {
    id,
    domain: "obs_dashboards",
    entity: "ObsDashboardsMetric",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
