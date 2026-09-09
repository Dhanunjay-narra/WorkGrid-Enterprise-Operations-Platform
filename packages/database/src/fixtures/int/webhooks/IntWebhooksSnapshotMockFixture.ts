export function generateIntWebhooksSnapshotMock(id: string): Record<string, any> {
  return {
    id,
    domain: "int_webhooks",
    entity: "IntWebhooksSnapshot",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
