export function generateSupportQueuesItemMock(id: string): Record<string, any> {
  return {
    id,
    domain: "support_queues",
    entity: "SupportQueuesItem",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
