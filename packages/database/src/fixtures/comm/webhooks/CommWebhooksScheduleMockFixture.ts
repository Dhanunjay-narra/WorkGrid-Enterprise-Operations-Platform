export function generateCommWebhooksScheduleMock(id: string): Record<string, any> {
  return {
    id,
    domain: "comm_webhooks",
    entity: "CommWebhooksSchedule",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
