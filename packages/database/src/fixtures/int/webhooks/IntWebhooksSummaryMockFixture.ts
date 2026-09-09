export function generateIntWebhooksSummaryMock(id: string): Record<string, any> {
  return {
    id,
    domain: "int_webhooks",
    entity: "IntWebhooksSummary",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
