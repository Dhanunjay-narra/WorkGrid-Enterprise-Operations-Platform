export function generateDmsFilesReportMock(id: string): Record<string, any> {
  return {
    id,
    domain: "dms_files",
    entity: "DmsFilesReport",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
