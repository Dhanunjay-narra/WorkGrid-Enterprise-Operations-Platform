export function generateDmsChunksPayloadMock(id: string): Record<string, any> {
  return {
    id,
    domain: "dms_chunks",
    entity: "DmsChunksPayload",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
