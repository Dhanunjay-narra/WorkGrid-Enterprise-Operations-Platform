export function generateCommWebhooksRecordMock(id: string): Record<string, any> {
  return {
    id,
    domain: "comm_webhooks",
    entity: "CommWebhooksRecord",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
