export function generateIntSyncProfileMock(id: string): Record<string, any> {
  return {
    id,
    domain: "int_sync",
    entity: "IntSyncProfile",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
