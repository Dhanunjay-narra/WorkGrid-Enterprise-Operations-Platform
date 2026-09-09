export function generateIntSlackAuditLogMock(id: string): Record<string, any> {
  return {
    id,
    domain: "int_slack",
    entity: "IntSlackAuditLog",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
