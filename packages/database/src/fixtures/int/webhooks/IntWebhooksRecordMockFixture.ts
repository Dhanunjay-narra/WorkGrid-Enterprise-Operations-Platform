export function generateIntWebhooksRecordMock(id: string): Record<string, any> {
  return {
    id,
    domain: "int_webhooks",
    entity: "IntWebhooksRecord",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
