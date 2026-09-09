export function generateDmsFilesSessionMock(id: string): Record<string, any> {
  return {
    id,
    domain: "dms_files",
    entity: "DmsFilesSession",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
