export function generateDmsChunksSnapshotMock(id: string): Record<string, any> {
  return {
    id,
    domain: "dms_chunks",
    entity: "DmsChunksSnapshot",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
