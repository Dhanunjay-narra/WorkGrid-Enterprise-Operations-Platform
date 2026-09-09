export function generateBiDashboardsTransactionMock(id: string): Record<string, any> {
  return {
    id,
    domain: "bi_dashboards",
    entity: "BiDashboardsTransaction",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
