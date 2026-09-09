export function generateDmsExportConfigMock(id: string): Record<string, any> {
  return {
    id,
    domain: "dms_export",
    entity: "DmsExportConfig",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
