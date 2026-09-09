export function generateDmsChunksSessionMock(id: string): Record<string, any> {
  return {
    id,
    domain: "dms_chunks",
    entity: "DmsChunksSession",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
