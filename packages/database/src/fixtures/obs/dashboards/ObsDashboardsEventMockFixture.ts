export function generateObsDashboardsEventMock(id: string): Record<string, any> {
  return {
    id,
    domain: "obs_dashboards",
    entity: "ObsDashboardsEvent",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
