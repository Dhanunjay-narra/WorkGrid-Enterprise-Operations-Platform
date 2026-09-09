export function generateDmsExportRecordMock(id: string): Record<string, any> {
  return {
    id,
    domain: "dms_export",
    entity: "DmsExportRecord",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
