export function generateCommWebhooksRuleMock(id: string): Record<string, any> {
  return {
    id,
    domain: "comm_webhooks",
    entity: "CommWebhooksRule",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
