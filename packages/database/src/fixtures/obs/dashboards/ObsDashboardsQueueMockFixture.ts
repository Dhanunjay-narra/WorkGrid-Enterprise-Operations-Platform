export function generateObsDashboardsQueueMock(id: string): Record<string, any> {
  return {
    id,
    domain: "obs_dashboards",
    entity: "ObsDashboardsQueue",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
