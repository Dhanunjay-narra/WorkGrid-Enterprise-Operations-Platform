export function generateDmsExportStateMock(id: string): Record<string, any> {
  return {
    id,
    domain: "dms_export",
    entity: "DmsExportState",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
