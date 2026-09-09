export function generateDmsFilesEventMock(id: string): Record<string, any> {
  return {
    id,
    domain: "dms_files",
    entity: "DmsFilesEvent",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
