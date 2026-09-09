export function generateBiDashboardsSnapshotMock(id: string): Record<string, any> {
  return {
    id,
    domain: "bi_dashboards",
    entity: "BiDashboardsSnapshot",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
