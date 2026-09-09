export function generateSupportQueuesPolicyMock(id: string): Record<string, any> {
  return {
    id,
    domain: "support_queues",
    entity: "SupportQueuesPolicy",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
