export function generateDmsFilesAuditLogMock(id: string): Record<string, any> {
  return {
    id,
    domain: "dms_files",
    entity: "DmsFilesAuditLog",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
