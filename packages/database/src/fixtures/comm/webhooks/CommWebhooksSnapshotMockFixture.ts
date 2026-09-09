export function generateCommWebhooksSnapshotMock(id: string): Record<string, any> {
  return {
    id,
    domain: "comm_webhooks",
    entity: "CommWebhooksSnapshot",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
