export function generateIntSyncEventMock(id: string): Record<string, any> {
  return {
    id,
    domain: "int_sync",
    entity: "IntSyncEvent",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
