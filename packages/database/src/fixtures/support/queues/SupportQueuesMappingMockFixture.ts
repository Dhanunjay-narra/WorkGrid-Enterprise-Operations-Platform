export function generateSupportQueuesMappingMock(id: string): Record<string, any> {
  return {
    id,
    domain: "support_queues",
    entity: "SupportQueuesMapping",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
