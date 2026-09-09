export function generateBiQueriesTaskMock(id: string): Record<string, any> {
  return {
    id,
    domain: "bi_queries",
    entity: "BiQueriesTask",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
