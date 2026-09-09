export function generateBiDashboardsRecordMock(id: string): Record<string, any> {
  return {
    id,
    domain: "bi_dashboards",
    entity: "BiDashboardsRecord",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
