export function generateBiDashboardsEventMock(id: string): Record<string, any> {
  return {
    id,
    domain: "bi_dashboards",
    entity: "BiDashboardsEvent",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
