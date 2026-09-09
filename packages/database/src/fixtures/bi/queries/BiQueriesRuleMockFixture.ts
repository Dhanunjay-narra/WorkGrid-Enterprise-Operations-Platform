export function generateBiQueriesRuleMock(id: string): Record<string, any> {
  return {
    id,
    domain: "bi_queries",
    entity: "BiQueriesRule",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
