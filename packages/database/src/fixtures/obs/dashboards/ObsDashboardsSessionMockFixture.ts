export function generateObsDashboardsSessionMock(id: string): Record<string, any> {
  return {
    id,
    domain: "obs_dashboards",
    entity: "ObsDashboardsSession",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
