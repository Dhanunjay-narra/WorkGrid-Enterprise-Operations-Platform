export function generateDmsExportProfileMock(id: string): Record<string, any> {
  return {
    id,
    domain: "dms_export",
    entity: "DmsExportProfile",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
