export function generateBiExportsMetricMock(id: string): Record<string, any> {
  return {
    id,
    domain: "bi_exports",
    entity: "BiExportsMetric",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
