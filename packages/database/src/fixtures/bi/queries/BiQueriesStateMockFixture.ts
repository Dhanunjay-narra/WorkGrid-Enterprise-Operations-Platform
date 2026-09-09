export function generateBiQueriesStateMock(id: string): Record<string, any> {
  return {
    id,
    domain: "bi_queries",
    entity: "BiQueriesState",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
