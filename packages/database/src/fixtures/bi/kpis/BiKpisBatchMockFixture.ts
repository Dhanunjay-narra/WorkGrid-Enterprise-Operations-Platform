export function generateBiKpisBatchMock(id: string): Record<string, any> {
  return {
    id,
    domain: "bi_kpis",
    entity: "BiKpisBatch",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
