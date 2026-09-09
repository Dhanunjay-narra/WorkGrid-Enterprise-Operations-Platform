export function generateDmsFilesScheduleMock(id: string): Record<string, any> {
  return {
    id,
    domain: "dms_files",
    entity: "DmsFilesSchedule",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
