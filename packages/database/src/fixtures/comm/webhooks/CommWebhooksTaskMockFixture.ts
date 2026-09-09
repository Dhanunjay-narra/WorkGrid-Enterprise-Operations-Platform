export function generateCommWebhooksTaskMock(id: string): Record<string, any> {
  return {
    id,
    domain: "comm_webhooks",
    entity: "CommWebhooksTask",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
