export function generateCommMessagesPolicyMock(id: string): Record<string, any> {
  return {
    id,
    domain: "comm_messages",
    entity: "CommMessagesPolicy",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
