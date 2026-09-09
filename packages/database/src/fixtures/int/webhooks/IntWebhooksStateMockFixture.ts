export function generateIntWebhooksStateMock(id: string): Record<string, any> {
  return {
    id,
    domain: "int_webhooks",
    entity: "IntWebhooksState",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
