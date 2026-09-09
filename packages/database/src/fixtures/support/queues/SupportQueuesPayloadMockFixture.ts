export function generateSupportQueuesPayloadMock(id: string): Record<string, any> {
  return {
    id,
    domain: "support_queues",
    entity: "SupportQueuesPayload",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
