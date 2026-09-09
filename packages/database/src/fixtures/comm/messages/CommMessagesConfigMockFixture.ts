export function generateCommMessagesConfigMock(id: string): Record<string, any> {
  return {
    id,
    domain: "comm_messages",
    entity: "CommMessagesConfig",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
