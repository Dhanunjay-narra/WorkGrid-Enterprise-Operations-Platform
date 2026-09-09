export function generateDmsExportTransactionMock(id: string): Record<string, any> {
  return {
    id,
    domain: "dms_export",
    entity: "DmsExportTransaction",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
