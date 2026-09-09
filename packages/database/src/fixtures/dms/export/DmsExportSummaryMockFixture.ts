export function generateDmsExportSummaryMock(id: string): Record<string, any> {
  return {
    id,
    domain: "dms_export",
    entity: "DmsExportSummary",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
