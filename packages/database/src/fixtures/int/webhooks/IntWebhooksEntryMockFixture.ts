export function generateIntWebhooksEntryMock(id: string): Record<string, any> {
  return {
    id,
    domain: "int_webhooks",
    entity: "IntWebhooksEntry",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
