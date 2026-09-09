export function generateIntWebhooksAuditLogMock(id: string): Record<string, any> {
  return {
    id,
    domain: "int_webhooks",
    entity: "IntWebhooksAuditLog",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
