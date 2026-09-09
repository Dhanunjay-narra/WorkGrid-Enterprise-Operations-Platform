export function generateBiDashboardsTaskMock(id: string): Record<string, any> {
  return {
    id,
    domain: "bi_dashboards",
    entity: "BiDashboardsTask",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
