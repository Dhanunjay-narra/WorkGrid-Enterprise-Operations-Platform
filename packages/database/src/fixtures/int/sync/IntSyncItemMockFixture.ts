export function generateIntSyncItemMock(id: string): Record<string, any> {
  return {
    id,
    domain: "int_sync",
    entity: "IntSyncItem",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
