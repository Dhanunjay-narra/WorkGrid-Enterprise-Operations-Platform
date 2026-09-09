export function generateBiDashboardsBatchMock(id: string): Record<string, any> {
  return {
    id,
    domain: "bi_dashboards",
    entity: "BiDashboardsBatch",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
