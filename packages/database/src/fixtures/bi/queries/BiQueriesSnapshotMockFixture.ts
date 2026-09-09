export function generateBiQueriesSnapshotMock(id: string): Record<string, any> {
  return {
    id,
    domain: "bi_queries",
    entity: "BiQueriesSnapshot",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
