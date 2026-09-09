export function generateCommNotificationsAuditLogMock(id: string): Record<string, any> {
  return {
    id,
    domain: "comm_notifications",
    entity: "CommNotificationsAuditLog",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
