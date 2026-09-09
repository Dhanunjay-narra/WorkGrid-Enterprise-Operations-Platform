export function generateDmsFilesEntryMock(id: string): Record<string, any> {
  return {
    id,
    domain: "dms_files",
    entity: "DmsFilesEntry",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
