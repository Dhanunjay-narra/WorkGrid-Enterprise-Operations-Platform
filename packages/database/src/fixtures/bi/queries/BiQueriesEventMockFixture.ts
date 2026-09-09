export function generateBiQueriesEventMock(id: string): Record<string, any> {
  return {
    id,
    domain: "bi_queries",
    entity: "BiQueriesEvent",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
