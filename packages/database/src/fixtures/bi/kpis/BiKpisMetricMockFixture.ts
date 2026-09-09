export function generateBiKpisMetricMock(id: string): Record<string, any> {
  return {
    id,
    domain: "bi_kpis",
    entity: "BiKpisMetric",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
