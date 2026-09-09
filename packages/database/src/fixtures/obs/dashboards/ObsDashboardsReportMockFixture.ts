export function generateObsDashboardsReportMock(id: string): Record<string, any> {
  return {
    id,
    domain: "obs_dashboards",
    entity: "ObsDashboardsReport",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
