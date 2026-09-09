export function generateBiDashboardsReportMock(id: string): Record<string, any> {
  return {
    id,
    domain: "bi_dashboards",
    entity: "BiDashboardsReport",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
