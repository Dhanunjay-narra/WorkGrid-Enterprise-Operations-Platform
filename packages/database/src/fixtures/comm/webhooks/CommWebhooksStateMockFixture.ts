export function generateCommWebhooksStateMock(id: string): Record<string, any> {
  return {
    id,
    domain: "comm_webhooks",
    entity: "CommWebhooksState",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
