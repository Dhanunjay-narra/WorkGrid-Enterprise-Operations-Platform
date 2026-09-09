export function generateSupportQueuesEntryMock(id: string): Record<string, any> {
  return {
    id,
    domain: "support_queues",
    entity: "SupportQueuesEntry",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
