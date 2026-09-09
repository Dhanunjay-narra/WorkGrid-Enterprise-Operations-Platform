export function generateDmsExportAuditLogMock(id: string): Record<string, any> {
  return {
    id,
    domain: "dms_export",
    entity: "DmsExportAuditLog",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
