export function generateIntWebhooksConfigMock(id: string): Record<string, any> {
  return {
    id,
    domain: "int_webhooks",
    entity: "IntWebhooksConfig",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
