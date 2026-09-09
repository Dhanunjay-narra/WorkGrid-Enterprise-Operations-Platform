export function generateIntOauthAuditLogMock(id: string): Record<string, any> {
  return {
    id,
    domain: "int_oauth",
    entity: "IntOauthAuditLog",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
