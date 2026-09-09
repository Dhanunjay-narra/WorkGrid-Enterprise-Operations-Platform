export function generateIntSyncBatchMock(id: string): Record<string, any> {
  return {
    id,
    domain: "int_sync",
    entity: "IntSyncBatch",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
