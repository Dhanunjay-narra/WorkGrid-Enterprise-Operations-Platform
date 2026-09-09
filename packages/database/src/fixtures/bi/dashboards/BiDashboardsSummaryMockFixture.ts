export function generateBiDashboardsSummaryMock(id: string): Record<string, any> {
  return {
    id,
    domain: "bi_dashboards",
    entity: "BiDashboardsSummary",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
