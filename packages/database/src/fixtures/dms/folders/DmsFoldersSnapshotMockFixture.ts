export function generateDmsFoldersSnapshotMock(id: string): Record<string, any> {
  return {
    id,
    domain: "dms_folders",
    entity: "DmsFoldersSnapshot",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
