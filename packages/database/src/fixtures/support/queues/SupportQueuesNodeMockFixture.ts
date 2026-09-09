export function generateSupportQueuesNodeMock(id: string): Record<string, any> {
  return {
    id,
    domain: "support_queues",
    entity: "SupportQueuesNode",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
