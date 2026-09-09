export function generateDmsChunksEventMock(id: string): Record<string, any> {
  return {
    id,
    domain: "dms_chunks",
    entity: "DmsChunksEvent",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
