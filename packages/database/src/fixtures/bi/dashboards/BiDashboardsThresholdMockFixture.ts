export function generateBiDashboardsThresholdMock(id: string): Record<string, any> {
  return {
    id,
    domain: "bi_dashboards",
    entity: "BiDashboardsThreshold",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
