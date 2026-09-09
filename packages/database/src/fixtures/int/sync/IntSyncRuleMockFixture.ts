export function generateIntSyncRuleMock(id: string): Record<string, any> {
  return {
    id,
    domain: "int_sync",
    entity: "IntSyncRule",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
