export function generateAuditAuditLogMock(id: string): Record<string, any> {
  return {
    id,
    domain: "audit",
    entity: "AuditAuditLog",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
