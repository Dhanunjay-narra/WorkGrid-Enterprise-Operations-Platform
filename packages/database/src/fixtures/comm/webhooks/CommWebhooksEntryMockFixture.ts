export function generateCommWebhooksEntryMock(id: string): Record<string, any> {
  return {
    id,
    domain: "comm_webhooks",
    entity: "CommWebhooksEntry",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
