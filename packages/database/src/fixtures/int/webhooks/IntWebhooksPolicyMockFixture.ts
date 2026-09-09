export function generateIntWebhooksPolicyMock(id: string): Record<string, any> {
  return {
    id,
    domain: "int_webhooks",
    entity: "IntWebhooksPolicy",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
