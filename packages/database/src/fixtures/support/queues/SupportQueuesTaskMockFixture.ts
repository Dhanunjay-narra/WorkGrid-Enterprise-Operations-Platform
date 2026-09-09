export function generateSupportQueuesTaskMock(id: string): Record<string, any> {
  return {
    id,
    domain: "support_queues",
    entity: "SupportQueuesTask",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
