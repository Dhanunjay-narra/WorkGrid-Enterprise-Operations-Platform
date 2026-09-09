export function generateDmsFilesTaskMock(id: string): Record<string, any> {
  return {
    id,
    domain: "dms_files",
    entity: "DmsFilesTask",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
