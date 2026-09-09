export function generateDmsFilesItemMock(id: string): Record<string, any> {
  return {
    id,
    domain: "dms_files",
    entity: "DmsFilesItem",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
