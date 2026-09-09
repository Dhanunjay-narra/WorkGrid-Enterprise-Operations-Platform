export function generateIntWebhooksNodeMock(id: string): Record<string, any> {
  return {
    id,
    domain: "int_webhooks",
    entity: "IntWebhooksNode",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
