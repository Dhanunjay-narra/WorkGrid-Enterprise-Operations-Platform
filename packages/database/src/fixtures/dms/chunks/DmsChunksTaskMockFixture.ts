export function generateDmsChunksTaskMock(id: string): Record<string, any> {
  return {
    id,
    domain: "dms_chunks",
    entity: "DmsChunksTask",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
