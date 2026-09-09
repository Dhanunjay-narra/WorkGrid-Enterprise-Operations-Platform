export function generateBiQueriesBatchMock(id: string): Record<string, any> {
  return {
    id,
    domain: "bi_queries",
    entity: "BiQueriesBatch",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
