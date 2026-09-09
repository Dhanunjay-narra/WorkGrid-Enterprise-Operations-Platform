export function generateBiDashboardsSessionMock(id: string): Record<string, any> {
  return {
    id,
    domain: "bi_dashboards",
    entity: "BiDashboardsSession",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
