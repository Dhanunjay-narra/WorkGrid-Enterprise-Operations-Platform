export function generateObsDashboardsPolicyMock(id: string): Record<string, any> {
  return {
    id,
    domain: "obs_dashboards",
    entity: "ObsDashboardsPolicy",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
