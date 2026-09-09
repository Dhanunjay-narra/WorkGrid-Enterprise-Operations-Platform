export function generateBiQueriesMetricMock(id: string): Record<string, any> {
  return {
    id,
    domain: "bi_queries",
    entity: "BiQueriesMetric",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
