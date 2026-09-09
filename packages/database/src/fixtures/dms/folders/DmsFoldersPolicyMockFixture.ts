export function generateDmsFoldersPolicyMock(id: string): Record<string, any> {
  return {
    id,
    domain: "dms_folders",
    entity: "DmsFoldersPolicy",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
