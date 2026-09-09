export function generateDmsFoldersProfileMock(id: string): Record<string, any> {
  return {
    id,
    domain: "dms_folders",
    entity: "DmsFoldersProfile",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
