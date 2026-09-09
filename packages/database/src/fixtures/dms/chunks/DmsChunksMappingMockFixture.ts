export function generateDmsChunksMappingMock(id: string): Record<string, any> {
  return {
    id,
    domain: "dms_chunks",
    entity: "DmsChunksMapping",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
