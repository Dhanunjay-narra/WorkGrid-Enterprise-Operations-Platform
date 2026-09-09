export function generateObsDashboardsBatchMock(id: string): Record<string, any> {
  return {
    id,
    domain: "obs_dashboards",
    entity: "ObsDashboardsBatch",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
