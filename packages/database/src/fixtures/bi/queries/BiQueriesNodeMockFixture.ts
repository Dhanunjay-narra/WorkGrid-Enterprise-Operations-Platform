export function generateBiQueriesNodeMock(id: string): Record<string, any> {
  return {
    id,
    domain: "bi_queries",
    entity: "BiQueriesNode",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
