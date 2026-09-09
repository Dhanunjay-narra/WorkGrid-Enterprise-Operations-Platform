export function generateDmsExportRuleMock(id: string): Record<string, any> {
  return {
    id,
    domain: "dms_export",
    entity: "DmsExportRule",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
