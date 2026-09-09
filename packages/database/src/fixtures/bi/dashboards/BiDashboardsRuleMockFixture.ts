export function generateBiDashboardsRuleMock(id: string): Record<string, any> {
  return {
    id,
    domain: "bi_dashboards",
    entity: "BiDashboardsRule",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
