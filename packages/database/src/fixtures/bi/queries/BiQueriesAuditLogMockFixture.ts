export function generateBiQueriesAuditLogMock(id: string): Record<string, any> {
  return {
    id,
    domain: "bi_queries",
    entity: "BiQueriesAuditLog",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
