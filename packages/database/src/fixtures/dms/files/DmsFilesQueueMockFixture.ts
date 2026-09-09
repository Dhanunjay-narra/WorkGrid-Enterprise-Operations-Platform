export function generateDmsFilesQueueMock(id: string): Record<string, any> {
  return {
    id,
    domain: "dms_files",
    entity: "DmsFilesQueue",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
