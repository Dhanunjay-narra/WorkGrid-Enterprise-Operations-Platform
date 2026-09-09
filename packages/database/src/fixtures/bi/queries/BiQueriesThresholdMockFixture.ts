export function generateBiQueriesThresholdMock(id: string): Record<string, any> {
  return {
    id,
    domain: "bi_queries",
    entity: "BiQueriesThreshold",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
