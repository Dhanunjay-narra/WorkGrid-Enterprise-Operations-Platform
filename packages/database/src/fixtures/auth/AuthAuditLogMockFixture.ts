export function generateAuthAuditLogMock(id: string): Record<string, any> {
  return {
    id,
    domain: "auth",
    entity: "AuthAuditLog",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
