export function generateBiQueriesItemMock(id: string): Record<string, any> {
  return {
    id,
    domain: "bi_queries",
    entity: "BiQueriesItem",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
