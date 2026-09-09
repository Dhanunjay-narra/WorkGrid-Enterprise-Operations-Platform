export function generateDmsChunksItemMock(id: string): Record<string, any> {
  return {
    id,
    domain: "dms_chunks",
    entity: "DmsChunksItem",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
