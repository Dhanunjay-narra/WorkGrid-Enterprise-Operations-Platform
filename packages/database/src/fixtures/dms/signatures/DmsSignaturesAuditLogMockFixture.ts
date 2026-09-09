export function generateDmsSignaturesAuditLogMock(id: string): Record<string, any> {
  return {
    id,
    domain: "dms_signatures",
    entity: "DmsSignaturesAuditLog",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
