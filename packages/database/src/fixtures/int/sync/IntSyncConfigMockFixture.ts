export function generateIntSyncConfigMock(id: string): Record<string, any> {
  return {
    id,
    domain: "int_sync",
    entity: "IntSyncConfig",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
