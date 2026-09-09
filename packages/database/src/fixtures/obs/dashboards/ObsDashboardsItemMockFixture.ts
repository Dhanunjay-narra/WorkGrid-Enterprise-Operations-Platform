export function generateObsDashboardsItemMock(id: string): Record<string, any> {
  return {
    id,
    domain: "obs_dashboards",
    entity: "ObsDashboardsItem",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
