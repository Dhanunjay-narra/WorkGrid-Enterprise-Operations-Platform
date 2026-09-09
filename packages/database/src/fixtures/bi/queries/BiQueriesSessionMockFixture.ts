export function generateBiQueriesSessionMock(id: string): Record<string, any> {
  return {
    id,
    domain: "bi_queries",
    entity: "BiQueriesSession",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
