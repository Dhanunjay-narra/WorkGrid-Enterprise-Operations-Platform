export function generateCommMessagesQueueMock(id: string): Record<string, any> {
  return {
    id,
    domain: "comm_messages",
    entity: "CommMessagesQueue",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
