export function generateIntWebhooksSessionMock(id: string): Record<string, any> {
  return {
    id,
    domain: "int_webhooks",
    entity: "IntWebhooksSession",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
