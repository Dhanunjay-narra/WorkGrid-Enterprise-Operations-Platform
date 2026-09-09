export function generateBiQueriesPayloadMock(id: string): Record<string, any> {
  return {
    id,
    domain: "bi_queries",
    entity: "BiQueriesPayload",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
