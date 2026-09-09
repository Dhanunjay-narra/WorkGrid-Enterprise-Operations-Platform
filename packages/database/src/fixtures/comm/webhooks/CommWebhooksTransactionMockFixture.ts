export function generateCommWebhooksTransactionMock(id: string): Record<string, any> {
  return {
    id,
    domain: "comm_webhooks",
    entity: "CommWebhooksTransaction",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
