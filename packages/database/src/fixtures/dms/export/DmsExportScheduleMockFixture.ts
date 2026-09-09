export function generateDmsExportScheduleMock(id: string): Record<string, any> {
  return {
    id,
    domain: "dms_export",
    entity: "DmsExportSchedule",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
