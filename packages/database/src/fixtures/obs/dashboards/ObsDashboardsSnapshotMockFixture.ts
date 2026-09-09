export function generateObsDashboardsSnapshotMock(id: string): Record<string, any> {
  return {
    id,
    domain: "obs_dashboards",
    entity: "ObsDashboardsSnapshot",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
