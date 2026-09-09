export function generateBiQueriesProfileMock(id: string): Record<string, any> {
  return {
    id,
    domain: "bi_queries",
    entity: "BiQueriesProfile",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
