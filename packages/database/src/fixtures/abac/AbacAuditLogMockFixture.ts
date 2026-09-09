export function generateAbacAuditLogMock(id: string): Record<string, any> {
  return {
    id,
    domain: "abac",
    entity: "AbacAuditLog",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
