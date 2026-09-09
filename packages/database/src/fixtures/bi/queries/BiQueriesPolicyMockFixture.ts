export function generateBiQueriesPolicyMock(id: string): Record<string, any> {
  return {
    id,
    domain: "bi_queries",
    entity: "BiQueriesPolicy",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
