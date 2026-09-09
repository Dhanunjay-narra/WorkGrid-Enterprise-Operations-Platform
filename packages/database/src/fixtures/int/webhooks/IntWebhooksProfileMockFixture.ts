export function generateIntWebhooksProfileMock(id: string): Record<string, any> {
  return {
    id,
    domain: "int_webhooks",
    entity: "IntWebhooksProfile",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
