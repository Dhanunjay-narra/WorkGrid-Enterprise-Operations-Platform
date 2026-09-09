export function generateIntSyncRecordMock(id: string): Record<string, any> {
  return {
    id,
    domain: "int_sync",
    entity: "IntSyncRecord",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
