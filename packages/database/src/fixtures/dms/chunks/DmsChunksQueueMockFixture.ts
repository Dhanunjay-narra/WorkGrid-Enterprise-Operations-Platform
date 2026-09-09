export function generateDmsChunksQueueMock(id: string): Record<string, any> {
  return {
    id,
    domain: "dms_chunks",
    entity: "DmsChunksQueue",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
