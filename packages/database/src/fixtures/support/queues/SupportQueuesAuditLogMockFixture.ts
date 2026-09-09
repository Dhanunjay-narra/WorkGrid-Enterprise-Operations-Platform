export function generateSupportQueuesAuditLogMock(id: string): Record<string, any> {
  return {
    id,
    domain: "support_queues",
    entity: "SupportQueuesAuditLog",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
