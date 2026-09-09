export function generateDmsExportPayloadMock(id: string): Record<string, any> {
  return {
    id,
    domain: "dms_export",
    entity: "DmsExportPayload",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
