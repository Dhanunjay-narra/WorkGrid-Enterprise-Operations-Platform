export function generateCommWebhooksMetricMock(id: string): Record<string, any> {
  return {
    id,
    domain: "comm_webhooks",
    entity: "CommWebhooksMetric",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
