export function generateIntWebhooksEventMock(id: string): Record<string, any> {
  return {
    id,
    domain: "int_webhooks",
    entity: "IntWebhooksEvent",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
