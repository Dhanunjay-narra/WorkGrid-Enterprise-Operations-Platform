export function generateCommWebhooksThresholdMock(id: string): Record<string, any> {
  return {
    id,
    domain: "comm_webhooks",
    entity: "CommWebhooksThreshold",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
