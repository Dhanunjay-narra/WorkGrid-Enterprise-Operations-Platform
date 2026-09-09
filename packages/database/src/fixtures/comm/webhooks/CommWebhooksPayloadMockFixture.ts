export function generateCommWebhooksPayloadMock(id: string): Record<string, any> {
  return {
    id,
    domain: "comm_webhooks",
    entity: "CommWebhooksPayload",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
