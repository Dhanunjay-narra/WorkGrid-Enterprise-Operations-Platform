export function generateIntSyncSessionMock(id: string): Record<string, any> {
  return {
    id,
    domain: "int_sync",
    entity: "IntSyncSession",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
