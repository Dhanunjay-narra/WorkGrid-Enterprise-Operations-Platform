export function generateDmsFilesProfileMock(id: string): Record<string, any> {
  return {
    id,
    domain: "dms_files",
    entity: "DmsFilesProfile",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
