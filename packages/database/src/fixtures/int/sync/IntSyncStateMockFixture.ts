export function generateIntSyncStateMock(id: string): Record<string, any> {
  return {
    id,
    domain: "int_sync",
    entity: "IntSyncState",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
