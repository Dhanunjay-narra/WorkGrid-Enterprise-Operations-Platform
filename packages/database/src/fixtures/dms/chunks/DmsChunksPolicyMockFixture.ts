export function generateDmsChunksPolicyMock(id: string): Record<string, any> {
  return {
    id,
    domain: "dms_chunks",
    entity: "DmsChunksPolicy",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
