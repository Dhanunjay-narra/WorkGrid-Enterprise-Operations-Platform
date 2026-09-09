export function generateBiDashboardsQueueMock(id: string): Record<string, any> {
  return {
    id,
    domain: "bi_dashboards",
    entity: "BiDashboardsQueue",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
