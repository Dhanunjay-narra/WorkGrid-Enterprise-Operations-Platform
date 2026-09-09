export function generateBiDashboardsPayloadMock(id: string): Record<string, any> {
  return {
    id,
    domain: "bi_dashboards",
    entity: "BiDashboardsPayload",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
