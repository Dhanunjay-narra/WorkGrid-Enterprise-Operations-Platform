export function generateIntSyncEntryMock(id: string): Record<string, any> {
  return {
    id,
    domain: "int_sync",
    entity: "IntSyncEntry",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
