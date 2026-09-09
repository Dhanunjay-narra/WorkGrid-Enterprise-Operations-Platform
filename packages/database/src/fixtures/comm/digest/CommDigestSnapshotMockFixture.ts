export function generateCommDigestSnapshotMock(id: string): Record<string, any> {
  return {
    id,
    domain: "comm_digest",
    entity: "CommDigestSnapshot",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
