export function generateBiQueriesEntryMock(id: string): Record<string, any> {
  return {
    id,
    domain: "bi_queries",
    entity: "BiQueriesEntry",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
