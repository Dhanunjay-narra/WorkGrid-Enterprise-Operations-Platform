export function generateIntSyncMappingMock(id: string): Record<string, any> {
  return {
    id,
    domain: "int_sync",
    entity: "IntSyncMapping",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
