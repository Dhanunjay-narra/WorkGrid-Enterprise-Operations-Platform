export function generateBiDashboardsNodeMock(id: string): Record<string, any> {
  return {
    id,
    domain: "bi_dashboards",
    entity: "BiDashboardsNode",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
