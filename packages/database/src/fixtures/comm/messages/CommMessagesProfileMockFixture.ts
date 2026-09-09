export function generateCommMessagesProfileMock(id: string): Record<string, any> {
  return {
    id,
    domain: "comm_messages",
    entity: "CommMessagesProfile",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
