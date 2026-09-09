export function generateDmsFoldersItemMock(id: string): Record<string, any> {
  return {
    id,
    domain: "dms_folders",
    entity: "DmsFoldersItem",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
