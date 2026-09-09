export function generateDmsChunksThresholdMock(id: string): Record<string, any> {
  return {
    id,
    domain: "dms_chunks",
    entity: "DmsChunksThreshold",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
