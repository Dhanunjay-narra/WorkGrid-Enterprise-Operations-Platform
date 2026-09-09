export function generateDmsExportThresholdMock(id: string): Record<string, any> {
  return {
    id,
    domain: "dms_export",
    entity: "DmsExportThreshold",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
