export function generateDmsFoldersRecordMock(id: string): Record<string, any> {
  return {
    id,
    domain: "dms_folders",
    entity: "DmsFoldersRecord",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
