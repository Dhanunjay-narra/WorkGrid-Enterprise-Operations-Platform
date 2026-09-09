export function generateCommThreadsSnapshotMock(id: string): Record<string, any> {
  return {
    id,
    domain: "comm_threads",
    entity: "CommThreadsSnapshot",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
