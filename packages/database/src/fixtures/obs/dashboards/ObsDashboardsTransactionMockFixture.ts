export function generateObsDashboardsTransactionMock(id: string): Record<string, any> {
  return {
    id,
    domain: "obs_dashboards",
    entity: "ObsDashboardsTransaction",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
