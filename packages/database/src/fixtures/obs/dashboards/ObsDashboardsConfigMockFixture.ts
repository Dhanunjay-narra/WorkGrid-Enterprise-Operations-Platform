export function generateObsDashboardsConfigMock(id: string): Record<string, any> {
  return {
    id,
    domain: "obs_dashboards",
    entity: "ObsDashboardsConfig",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
