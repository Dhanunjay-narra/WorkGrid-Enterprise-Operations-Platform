export function generateDmsFoldersMappingMock(id: string): Record<string, any> {
  return {
    id,
    domain: "dms_folders",
    entity: "DmsFoldersMapping",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
