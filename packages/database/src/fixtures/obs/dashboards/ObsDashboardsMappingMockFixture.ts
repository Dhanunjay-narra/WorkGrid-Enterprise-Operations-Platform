export function generateObsDashboardsMappingMock(id: string): Record<string, any> {
  return {
    id,
    domain: "obs_dashboards",
    entity: "ObsDashboardsMapping",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
