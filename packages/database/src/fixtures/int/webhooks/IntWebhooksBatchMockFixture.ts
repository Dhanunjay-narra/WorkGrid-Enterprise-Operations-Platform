export function generateIntWebhooksBatchMock(id: string): Record<string, any> {
  return {
    id,
    domain: "int_webhooks",
    entity: "IntWebhooksBatch",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
