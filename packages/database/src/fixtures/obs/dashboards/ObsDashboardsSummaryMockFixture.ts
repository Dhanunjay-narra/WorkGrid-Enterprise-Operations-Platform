export function generateObsDashboardsSummaryMock(id: string): Record<string, any> {
  return {
    id,
    domain: "obs_dashboards",
    entity: "ObsDashboardsSummary",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
