export function generateDmsExportQueueMock(id: string): Record<string, any> {
  return {
    id,
    domain: "dms_export",
    entity: "DmsExportQueue",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
