export function generateBiDashboardsEntryMock(id: string): Record<string, any> {
  return {
    id,
    domain: "bi_dashboards",
    entity: "BiDashboardsEntry",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
