export function generateCommMessagesPayloadMock(id: string): Record<string, any> {
  return {
    id,
    domain: "comm_messages",
    entity: "CommMessagesPayload",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
