export function generateCommMessagesAuditLogMock(id: string): Record<string, any> {
  return {
    id,
    domain: "comm_messages",
    entity: "CommMessagesAuditLog",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
