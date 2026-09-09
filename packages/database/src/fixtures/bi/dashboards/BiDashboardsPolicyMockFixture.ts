export function generateBiDashboardsPolicyMock(id: string): Record<string, any> {
  return {
    id,
    domain: "bi_dashboards",
    entity: "BiDashboardsPolicy",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
