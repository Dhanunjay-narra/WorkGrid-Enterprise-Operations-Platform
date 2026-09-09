export function generateDmsFilesSnapshotMock(id: string): Record<string, any> {
  return {
    id,
    domain: "dms_files",
    entity: "DmsFilesSnapshot",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
