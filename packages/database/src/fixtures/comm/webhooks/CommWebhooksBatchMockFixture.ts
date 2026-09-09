export function generateCommWebhooksBatchMock(id: string): Record<string, any> {
  return {
    id,
    domain: "comm_webhooks",
    entity: "CommWebhooksBatch",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
