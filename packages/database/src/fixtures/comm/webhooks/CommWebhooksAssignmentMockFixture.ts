export function generateCommWebhooksAssignmentMock(id: string): Record<string, any> {
  return {
    id,
    domain: "comm_webhooks",
    entity: "CommWebhooksAssignment",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
