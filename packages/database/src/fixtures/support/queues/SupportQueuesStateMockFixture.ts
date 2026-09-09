export function generateSupportQueuesStateMock(id: string): Record<string, any> {
  return {
    id,
    domain: "support_queues",
    entity: "SupportQueuesState",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
