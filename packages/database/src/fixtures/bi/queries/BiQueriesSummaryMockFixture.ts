export function generateBiQueriesSummaryMock(id: string): Record<string, any> {
  return {
    id,
    domain: "bi_queries",
    entity: "BiQueriesSummary",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
