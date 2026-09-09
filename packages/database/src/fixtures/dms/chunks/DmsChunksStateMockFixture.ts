export function generateDmsChunksStateMock(id: string): Record<string, any> {
  return {
    id,
    domain: "dms_chunks",
    entity: "DmsChunksState",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
