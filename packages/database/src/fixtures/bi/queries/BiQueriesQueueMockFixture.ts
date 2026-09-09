export function generateBiQueriesQueueMock(id: string): Record<string, any> {
  return {
    id,
    domain: "bi_queries",
    entity: "BiQueriesQueue",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
