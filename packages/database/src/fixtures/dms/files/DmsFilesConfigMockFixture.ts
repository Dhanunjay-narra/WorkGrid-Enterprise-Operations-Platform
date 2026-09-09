export function generateDmsFilesConfigMock(id: string): Record<string, any> {
  return {
    id,
    domain: "dms_files",
    entity: "DmsFilesConfig",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
