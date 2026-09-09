export function generateCommThreadsTransactionMock(id: string): Record<string, any> {
  return {
    id,
    domain: "comm_threads",
    entity: "CommThreadsTransaction",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
