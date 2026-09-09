export function generateIntSyncTaskMock(id: string): Record<string, any> {
  return {
    id,
    domain: "int_sync",
    entity: "IntSyncTask",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
