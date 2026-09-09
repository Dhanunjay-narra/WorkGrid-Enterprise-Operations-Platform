export function generateSupportQueuesEventMock(id: string): Record<string, any> {
  return {
    id,
    domain: "support_queues",
    entity: "SupportQueuesEvent",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
