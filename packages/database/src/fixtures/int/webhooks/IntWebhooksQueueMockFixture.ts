export function generateIntWebhooksQueueMock(id: string): Record<string, any> {
  return {
    id,
    domain: "int_webhooks",
    entity: "IntWebhooksQueue",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
