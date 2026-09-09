export function generateCommMessagesSnapshotMock(id: string): Record<string, any> {
  return {
    id,
    domain: "comm_messages",
    entity: "CommMessagesSnapshot",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
