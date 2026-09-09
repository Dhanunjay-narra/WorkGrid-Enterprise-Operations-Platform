export function generateDmsExportSnapshotMock(id: string): Record<string, any> {
  return {
    id,
    domain: "dms_export",
    entity: "DmsExportSnapshot",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
