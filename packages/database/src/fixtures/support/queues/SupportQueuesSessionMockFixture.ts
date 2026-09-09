export function generateSupportQueuesSessionMock(id: string): Record<string, any> {
  return {
    id,
    domain: "support_queues",
    entity: "SupportQueuesSession",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
