export function generateDmsExportMappingMock(id: string): Record<string, any> {
  return {
    id,
    domain: "dms_export",
    entity: "DmsExportMapping",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
