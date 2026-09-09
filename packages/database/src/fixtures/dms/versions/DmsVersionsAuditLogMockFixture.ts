export function generateDmsVersionsAuditLogMock(id: string): Record<string, any> {
  return {
    id,
    domain: "dms_versions",
    entity: "DmsVersionsAuditLog",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
