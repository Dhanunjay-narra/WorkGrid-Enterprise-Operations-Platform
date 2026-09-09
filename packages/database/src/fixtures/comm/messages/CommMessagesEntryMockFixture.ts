export function generateCommMessagesEntryMock(id: string): Record<string, any> {
  return {
    id,
    domain: "comm_messages",
    entity: "CommMessagesEntry",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
