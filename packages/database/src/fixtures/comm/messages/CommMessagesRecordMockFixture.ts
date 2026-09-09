export function generateCommMessagesRecordMock(id: string): Record<string, any> {
  return {
    id,
    domain: "comm_messages",
    entity: "CommMessagesRecord",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
