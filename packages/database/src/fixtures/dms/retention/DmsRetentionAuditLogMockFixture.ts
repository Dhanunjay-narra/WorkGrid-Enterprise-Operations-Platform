export function generateDmsRetentionAuditLogMock(id: string): Record<string, any> {
  return {
    id,
    domain: "dms_retention",
    entity: "DmsRetentionAuditLog",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
