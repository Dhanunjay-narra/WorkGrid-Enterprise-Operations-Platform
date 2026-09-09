export function generateIntWebhooksAssignmentMock(id: string): Record<string, any> {
  return {
    id,
    domain: "int_webhooks",
    entity: "IntWebhooksAssignment",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
