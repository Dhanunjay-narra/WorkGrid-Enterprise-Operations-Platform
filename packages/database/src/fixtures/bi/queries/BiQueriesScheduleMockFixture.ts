export function generateBiQueriesScheduleMock(id: string): Record<string, any> {
  return {
    id,
    domain: "bi_queries",
    entity: "BiQueriesSchedule",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
