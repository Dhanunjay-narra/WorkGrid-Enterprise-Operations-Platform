export function generateIntSyncTransactionMock(id: string): Record<string, any> {
  return {
    id,
    domain: "int_sync",
    entity: "IntSyncTransaction",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
