export function generateDmsExportEventMock(id: string): Record<string, any> {
  return {
    id,
    domain: "dms_export",
    entity: "DmsExportEvent",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
