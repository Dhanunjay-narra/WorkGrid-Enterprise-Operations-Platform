export function generateSupportQueuesBatchMock(id: string): Record<string, any> {
  return {
    id,
    domain: "support_queues",
    entity: "SupportQueuesBatch",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
