export function generateSupportQueuesSnapshotMock(id: string): Record<string, any> {
  return {
    id,
    domain: "support_queues",
    entity: "SupportQueuesSnapshot",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
