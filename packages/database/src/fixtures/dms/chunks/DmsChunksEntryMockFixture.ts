export function generateDmsChunksEntryMock(id: string): Record<string, any> {
  return {
    id,
    domain: "dms_chunks",
    entity: "DmsChunksEntry",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
