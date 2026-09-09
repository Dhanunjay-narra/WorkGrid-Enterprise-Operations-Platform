export function generateDmsChunksBatchMock(id: string): Record<string, any> {
  return {
    id,
    domain: "dms_chunks",
    entity: "DmsChunksBatch",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
