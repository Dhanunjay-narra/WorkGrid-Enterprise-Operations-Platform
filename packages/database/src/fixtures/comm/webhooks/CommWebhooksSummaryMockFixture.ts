export function generateCommWebhooksSummaryMock(id: string): Record<string, any> {
  return {
    id,
    domain: "comm_webhooks",
    entity: "CommWebhooksSummary",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
