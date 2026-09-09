export function generateIntWebhooksMappingMock(id: string): Record<string, any> {
  return {
    id,
    domain: "int_webhooks",
    entity: "IntWebhooksMapping",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
