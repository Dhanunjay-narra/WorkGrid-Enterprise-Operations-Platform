export function generateDmsVersionsSnapshotMock(id: string): Record<string, any> {
  return {
    id,
    domain: "dms_versions",
    entity: "DmsVersionsSnapshot",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
