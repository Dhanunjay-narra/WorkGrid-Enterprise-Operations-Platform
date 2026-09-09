export function generateIntWebhooksPayloadMock(id: string): Record<string, any> {
  return {
    id,
    domain: "int_webhooks",
    entity: "IntWebhooksPayload",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
