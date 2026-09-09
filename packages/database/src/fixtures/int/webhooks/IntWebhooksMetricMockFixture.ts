export function generateIntWebhooksMetricMock(id: string): Record<string, any> {
  return {
    id,
    domain: "int_webhooks",
    entity: "IntWebhooksMetric",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
