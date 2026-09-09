export function generateSecurityAuditLogMock(id: string): Record<string, any> {
  return {
    id,
    domain: "security",
    entity: "SecurityAuditLog",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
