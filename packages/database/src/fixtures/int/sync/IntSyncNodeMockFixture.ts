export function generateIntSyncNodeMock(id: string): Record<string, any> {
  return {
    id,
    domain: "int_sync",
    entity: "IntSyncNode",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
