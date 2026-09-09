export function generateDmsChunksNodeMock(id: string): Record<string, any> {
  return {
    id,
    domain: "dms_chunks",
    entity: "DmsChunksNode",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
