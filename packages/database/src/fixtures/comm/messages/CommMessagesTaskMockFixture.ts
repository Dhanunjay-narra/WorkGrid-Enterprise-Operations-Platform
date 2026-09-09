export function generateCommMessagesTaskMock(id: string): Record<string, any> {
  return {
    id,
    domain: "comm_messages",
    entity: "CommMessagesTask",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
