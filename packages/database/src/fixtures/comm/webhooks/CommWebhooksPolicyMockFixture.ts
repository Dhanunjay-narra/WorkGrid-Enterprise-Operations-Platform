export function generateCommWebhooksPolicyMock(id: string): Record<string, any> {
  return {
    id,
    domain: "comm_webhooks",
    entity: "CommWebhooksPolicy",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
