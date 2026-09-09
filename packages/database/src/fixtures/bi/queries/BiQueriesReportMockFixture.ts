export function generateBiQueriesReportMock(id: string): Record<string, any> {
  return {
    id,
    domain: "bi_queries",
    entity: "BiQueriesReport",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
