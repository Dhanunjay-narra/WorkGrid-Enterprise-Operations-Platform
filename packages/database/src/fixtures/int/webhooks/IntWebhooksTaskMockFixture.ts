export function generateIntWebhooksTaskMock(id: string): Record<string, any> {
  return {
    id,
    domain: "int_webhooks",
    entity: "IntWebhooksTask",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
