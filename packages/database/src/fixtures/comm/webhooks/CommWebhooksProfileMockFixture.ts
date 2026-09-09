export function generateCommWebhooksProfileMock(id: string): Record<string, any> {
  return {
    id,
    domain: "comm_webhooks",
    entity: "CommWebhooksProfile",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
