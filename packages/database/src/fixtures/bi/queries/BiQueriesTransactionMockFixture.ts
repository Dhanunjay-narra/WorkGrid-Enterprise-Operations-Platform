export function generateBiQueriesTransactionMock(id: string): Record<string, any> {
  return {
    id,
    domain: "bi_queries",
    entity: "BiQueriesTransaction",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
