export function generateDmsExportPolicyMock(id: string): Record<string, any> {
  return {
    id,
    domain: "dms_export",
    entity: "DmsExportPolicy",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
