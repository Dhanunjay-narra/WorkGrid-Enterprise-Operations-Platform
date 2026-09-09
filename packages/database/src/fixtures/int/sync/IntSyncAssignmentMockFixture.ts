export function generateIntSyncAssignmentMock(id: string): Record<string, any> {
  return {
    id,
    domain: "int_sync",
    entity: "IntSyncAssignment",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
