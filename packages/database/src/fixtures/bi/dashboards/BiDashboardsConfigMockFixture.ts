export function generateBiDashboardsConfigMock(id: string): Record<string, any> {
  return {
    id,
    domain: "bi_dashboards",
    entity: "BiDashboardsConfig",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
