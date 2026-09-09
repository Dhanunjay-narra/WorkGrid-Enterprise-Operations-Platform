export function generateDmsChunksConfigMock(id: string): Record<string, any> {
  return {
    id,
    domain: "dms_chunks",
    entity: "DmsChunksConfig",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
