export function generateBiQueriesMappingMock(id: string): Record<string, any> {
  return {
    id,
    domain: "bi_queries",
    entity: "BiQueriesMapping",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
