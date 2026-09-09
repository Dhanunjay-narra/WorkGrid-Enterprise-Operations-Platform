export function generateDmsChunksRecordMock(id: string): Record<string, any> {
  return {
    id,
    domain: "dms_chunks",
    entity: "DmsChunksRecord",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
