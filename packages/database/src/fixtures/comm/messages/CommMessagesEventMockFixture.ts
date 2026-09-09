export function generateCommMessagesEventMock(id: string): Record<string, any> {
  return {
    id,
    domain: "comm_messages",
    entity: "CommMessagesEvent",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
