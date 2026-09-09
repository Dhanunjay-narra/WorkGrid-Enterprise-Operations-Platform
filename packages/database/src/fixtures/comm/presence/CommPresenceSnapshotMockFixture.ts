export function generateCommPresenceSnapshotMock(id: string): Record<string, any> {
  return {
    id,
    domain: "comm_presence",
    entity: "CommPresenceSnapshot",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
