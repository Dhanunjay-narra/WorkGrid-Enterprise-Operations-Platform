export function generateBiQueriesConfigMock(id: string): Record<string, any> {
  return {
    id,
    domain: "bi_queries",
    entity: "BiQueriesConfig",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
