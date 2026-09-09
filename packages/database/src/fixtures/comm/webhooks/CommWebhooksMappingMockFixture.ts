export function generateCommWebhooksMappingMock(id: string): Record<string, any> {
  return {
    id,
    domain: "comm_webhooks",
    entity: "CommWebhooksMapping",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
