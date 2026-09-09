export function generateCommMessagesItemMock(id: string): Record<string, any> {
  return {
    id,
    domain: "comm_messages",
    entity: "CommMessagesItem",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
