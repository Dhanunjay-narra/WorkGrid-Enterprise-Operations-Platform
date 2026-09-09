export function generateBiDashboardsStateMock(id: string): Record<string, any> {
  return {
    id,
    domain: "bi_dashboards",
    entity: "BiDashboardsState",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
