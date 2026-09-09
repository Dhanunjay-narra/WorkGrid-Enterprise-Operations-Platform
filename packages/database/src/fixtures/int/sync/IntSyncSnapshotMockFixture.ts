export function generateIntSyncSnapshotMock(id: string): Record<string, any> {
  return {
    id,
    domain: "int_sync",
    entity: "IntSyncSnapshot",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
