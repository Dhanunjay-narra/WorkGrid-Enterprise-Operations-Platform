export function generateCommWebhooksNodeMock(id: string): Record<string, any> {
  return {
    id,
    domain: "comm_webhooks",
    entity: "CommWebhooksNode",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
