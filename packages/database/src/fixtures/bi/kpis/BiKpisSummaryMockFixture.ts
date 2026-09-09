export function generateBiKpisSummaryMock(id: string): Record<string, any> {
  return {
    id,
    domain: "bi_kpis",
    entity: "BiKpisSummary",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
