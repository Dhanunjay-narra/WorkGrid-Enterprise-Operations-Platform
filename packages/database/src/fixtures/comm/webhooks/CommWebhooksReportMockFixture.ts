export function generateCommWebhooksReportMock(id: string): Record<string, any> {
  return {
    id,
    domain: "comm_webhooks",
    entity: "CommWebhooksReport",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
