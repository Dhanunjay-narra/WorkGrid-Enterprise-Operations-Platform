export function generateCommMessagesTransactionMock(id: string): Record<string, any> {
  return {
    id,
    domain: "comm_messages",
    entity: "CommMessagesTransaction",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
