export function generateCommWebhooksQueueMock(id: string): Record<string, any> {
  return {
    id,
    domain: "comm_webhooks",
    entity: "CommWebhooksQueue",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
