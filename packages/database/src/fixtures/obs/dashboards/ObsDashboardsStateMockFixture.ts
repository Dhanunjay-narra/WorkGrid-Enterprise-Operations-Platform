export function generateObsDashboardsStateMock(id: string): Record<string, any> {
  return {
    id,
    domain: "obs_dashboards",
    entity: "ObsDashboardsState",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
