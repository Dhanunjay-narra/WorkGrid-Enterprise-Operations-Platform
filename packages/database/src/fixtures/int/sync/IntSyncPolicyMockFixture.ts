export function generateIntSyncPolicyMock(id: string): Record<string, any> {
  return {
    id,
    domain: "int_sync",
    entity: "IntSyncPolicy",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
