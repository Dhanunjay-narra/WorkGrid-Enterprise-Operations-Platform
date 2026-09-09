export function generateBiQueriesRecordMock(id: string): Record<string, any> {
  return {
    id,
    domain: "bi_queries",
    entity: "BiQueriesRecord",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
