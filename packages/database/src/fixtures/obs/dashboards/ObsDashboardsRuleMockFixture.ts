export function generateObsDashboardsRuleMock(id: string): Record<string, any> {
  return {
    id,
    domain: "obs_dashboards",
    entity: "ObsDashboardsRule",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
