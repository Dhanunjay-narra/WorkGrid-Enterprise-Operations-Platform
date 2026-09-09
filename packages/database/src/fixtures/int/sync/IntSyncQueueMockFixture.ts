export function generateIntSyncQueueMock(id: string): Record<string, any> {
  return {
    id,
    domain: "int_sync",
    entity: "IntSyncQueue",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
