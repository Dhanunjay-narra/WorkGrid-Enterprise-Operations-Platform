export function generateDmsFilesNodeMock(id: string): Record<string, any> {
  return {
    id,
    domain: "dms_files",
    entity: "DmsFilesNode",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
