export function generateCommWebhooksAuditLogMock(id: string): Record<string, any> {
  return {
    id,
    domain: "comm_webhooks",
    entity: "CommWebhooksAuditLog",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
