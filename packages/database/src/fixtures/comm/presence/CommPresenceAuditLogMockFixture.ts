export function generateCommPresenceAuditLogMock(id: string): Record<string, any> {
  return {
    id,
    domain: "comm_presence",
    entity: "CommPresenceAuditLog",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
