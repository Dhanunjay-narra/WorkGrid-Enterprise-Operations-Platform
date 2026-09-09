export function generateDmsExportSessionMock(id: string): Record<string, any> {
  return {
    id,
    domain: "dms_export",
    entity: "DmsExportSession",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
