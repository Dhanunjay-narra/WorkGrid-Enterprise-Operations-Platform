export function generateDmsFoldersEntryMock(id: string): Record<string, any> {
  return {
    id,
    domain: "dms_folders",
    entity: "DmsFoldersEntry",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
