export function generateCommCallsAuditLogMock(id: string): Record<string, any> {
  return {
    id,
    domain: "comm_calls",
    entity: "CommCallsAuditLog",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
