export function generateSupportQueuesQueueMock(id: string): Record<string, any> {
  return {
    id,
    domain: "support_queues",
    entity: "SupportQueuesQueue",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
