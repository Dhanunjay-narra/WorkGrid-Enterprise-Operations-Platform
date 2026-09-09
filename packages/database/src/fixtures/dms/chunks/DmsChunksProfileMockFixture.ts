export function generateDmsChunksProfileMock(id: string): Record<string, any> {
  return {
    id,
    domain: "dms_chunks",
    entity: "DmsChunksProfile",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
