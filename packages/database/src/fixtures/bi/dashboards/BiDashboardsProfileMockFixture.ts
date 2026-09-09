export function generateBiDashboardsProfileMock(id: string): Record<string, any> {
  return {
    id,
    domain: "bi_dashboards",
    entity: "BiDashboardsProfile",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
