export function generateCommCallsTransactionMock(id: string): Record<string, any> {
  return {
    id,
    domain: "comm_calls",
    entity: "CommCallsTransaction",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
