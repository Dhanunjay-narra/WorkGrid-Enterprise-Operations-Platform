export function generateIntWebhooksItemMock(id: string): Record<string, any> {
  return {
    id,
    domain: "int_webhooks",
    entity: "IntWebhooksItem",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
