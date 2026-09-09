export function generateIntWebhooksThresholdMock(id: string): Record<string, any> {
  return {
    id,
    domain: "int_webhooks",
    entity: "IntWebhooksThreshold",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
