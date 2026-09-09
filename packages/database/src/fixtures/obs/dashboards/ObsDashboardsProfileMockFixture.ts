export function generateObsDashboardsProfileMock(id: string): Record<string, any> {
  return {
    id,
    domain: "obs_dashboards",
    entity: "ObsDashboardsProfile",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
