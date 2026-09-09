export function generateIntWebhooksRuleMock(id: string): Record<string, any> {
  return {
    id,
    domain: "int_webhooks",
    entity: "IntWebhooksRule",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
