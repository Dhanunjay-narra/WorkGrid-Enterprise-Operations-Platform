export function generateObsDashboardsThresholdMock(id: string): Record<string, any> {
  return {
    id,
    domain: "obs_dashboards",
    entity: "ObsDashboardsThreshold",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
