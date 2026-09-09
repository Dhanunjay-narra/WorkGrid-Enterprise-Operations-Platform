export function generateCommWebhooksSessionMock(id: string): Record<string, any> {
  return {
    id,
    domain: "comm_webhooks",
    entity: "CommWebhooksSession",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
