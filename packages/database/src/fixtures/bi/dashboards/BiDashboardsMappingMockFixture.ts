export function generateBiDashboardsMappingMock(id: string): Record<string, any> {
  return {
    id,
    domain: "bi_dashboards",
    entity: "BiDashboardsMapping",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
