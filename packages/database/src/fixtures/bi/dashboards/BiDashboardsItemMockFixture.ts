export function generateBiDashboardsItemMock(id: string): Record<string, any> {
  return {
    id,
    domain: "bi_dashboards",
    entity: "BiDashboardsItem",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
