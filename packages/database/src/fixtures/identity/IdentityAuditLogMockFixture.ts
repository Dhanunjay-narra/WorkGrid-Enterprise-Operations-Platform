export function generateIdentityAuditLogMock(id: string): Record<string, any> {
  return {
    id,
    domain: "identity",
    entity: "IdentityAuditLog",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
