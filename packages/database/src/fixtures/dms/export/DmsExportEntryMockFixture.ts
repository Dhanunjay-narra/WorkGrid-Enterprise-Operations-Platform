export function generateDmsExportEntryMock(id: string): Record<string, any> {
  return {
    id,
    domain: "dms_export",
    entity: "DmsExportEntry",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
