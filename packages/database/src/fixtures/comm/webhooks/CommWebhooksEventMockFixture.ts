export function generateCommWebhooksEventMock(id: string): Record<string, any> {
  return {
    id,
    domain: "comm_webhooks",
    entity: "CommWebhooksEvent",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
