export function generateCommMessagesNodeMock(id: string): Record<string, any> {
  return {
    id,
    domain: "comm_messages",
    entity: "CommMessagesNode",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
