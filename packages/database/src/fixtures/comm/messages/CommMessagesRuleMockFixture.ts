export function generateCommMessagesRuleMock(id: string): Record<string, any> {
  return {
    id,
    domain: "comm_messages",
    entity: "CommMessagesRule",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
