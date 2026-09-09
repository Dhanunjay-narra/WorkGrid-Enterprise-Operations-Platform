export function generateIntWebhooksTransactionMock(id: string): Record<string, any> {
  return {
    id,
    domain: "int_webhooks",
    entity: "IntWebhooksTransaction",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
