export function generateCommWebhooksItemMock(id: string): Record<string, any> {
  return {
    id,
    domain: "comm_webhooks",
    entity: "CommWebhooksItem",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
