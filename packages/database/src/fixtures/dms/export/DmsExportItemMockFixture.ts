export function generateDmsExportItemMock(id: string): Record<string, any> {
  return {
    id,
    domain: "dms_export",
    entity: "DmsExportItem",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
