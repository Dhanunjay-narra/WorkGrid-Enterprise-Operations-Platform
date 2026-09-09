export function generateObsDashboardsNodeMock(id: string): Record<string, any> {
  return {
    id,
    domain: "obs_dashboards",
    entity: "ObsDashboardsNode",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
