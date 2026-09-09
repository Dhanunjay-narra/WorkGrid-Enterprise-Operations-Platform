export function generateDmsExportTaskMock(id: string): Record<string, any> {
  return {
    id,
    domain: "dms_export",
    entity: "DmsExportTask",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
