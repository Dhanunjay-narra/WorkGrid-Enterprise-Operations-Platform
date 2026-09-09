export function generateBiDashboardsScheduleMock(id: string): Record<string, any> {
  return {
    id,
    domain: "bi_dashboards",
    entity: "BiDashboardsSchedule",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
