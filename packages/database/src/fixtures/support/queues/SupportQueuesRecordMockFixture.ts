export function generateSupportQueuesRecordMock(id: string): Record<string, any> {
  return {
    id,
    domain: "support_queues",
    entity: "SupportQueuesRecord",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
