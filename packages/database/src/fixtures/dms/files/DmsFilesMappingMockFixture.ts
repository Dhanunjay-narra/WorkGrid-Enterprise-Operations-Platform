export function generateDmsFilesMappingMock(id: string): Record<string, any> {
  return {
    id,
    domain: "dms_files",
    entity: "DmsFilesMapping",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
