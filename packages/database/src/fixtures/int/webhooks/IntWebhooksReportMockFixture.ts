export function generateIntWebhooksReportMock(id: string): Record<string, any> {
  return {
    id,
    domain: "int_webhooks",
    entity: "IntWebhooksReport",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
