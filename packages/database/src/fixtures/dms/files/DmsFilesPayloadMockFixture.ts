export function generateDmsFilesPayloadMock(id: string): Record<string, any> {
  return {
    id,
    domain: "dms_files",
    entity: "DmsFilesPayload",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
