export function generateBiQueriesAssignmentMock(id: string): Record<string, any> {
  return {
    id,
    domain: "bi_queries",
    entity: "BiQueriesAssignment",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
