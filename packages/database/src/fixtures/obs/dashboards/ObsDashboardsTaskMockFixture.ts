export function generateObsDashboardsTaskMock(id: string): Record<string, any> {
  return {
    id,
    domain: "obs_dashboards",
    entity: "ObsDashboardsTask",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
