export function generateCommCallsSnapshotMock(id: string): Record<string, any> {
  return {
    id,
    domain: "comm_calls",
    entity: "CommCallsSnapshot",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
