export function generateObsDashboardsEntryMock(id: string): Record<string, any> {
  return {
    id,
    domain: "obs_dashboards",
    entity: "ObsDashboardsEntry",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
