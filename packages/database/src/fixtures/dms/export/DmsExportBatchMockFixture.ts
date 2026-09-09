export function generateDmsExportBatchMock(id: string): Record<string, any> {
  return {
    id,
    domain: "dms_export",
    entity: "DmsExportBatch",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
