export function generateDmsExportReportMock(id: string): Record<string, any> {
  return {
    id,
    domain: "dms_export",
    entity: "DmsExportReport",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
