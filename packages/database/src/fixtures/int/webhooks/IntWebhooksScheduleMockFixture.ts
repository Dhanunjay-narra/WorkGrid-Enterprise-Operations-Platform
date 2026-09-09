export function generateIntWebhooksScheduleMock(id: string): Record<string, any> {
  return {
    id,
    domain: "int_webhooks",
    entity: "IntWebhooksSchedule",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
