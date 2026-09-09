export function generateCommWebhooksConfigMock(id: string): Record<string, any> {
  return {
    id,
    domain: "comm_webhooks",
    entity: "CommWebhooksConfig",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
