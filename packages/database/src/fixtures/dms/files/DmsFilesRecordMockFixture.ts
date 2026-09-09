export function generateDmsFilesRecordMock(id: string): Record<string, any> {
  return {
    id,
    domain: "dms_files",
    entity: "DmsFilesRecord",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
