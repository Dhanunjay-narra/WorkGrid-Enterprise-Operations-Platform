export function generateDmsExportNodeMock(id: string): Record<string, any> {
  return {
    id,
    domain: "dms_export",
    entity: "DmsExportNode",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
