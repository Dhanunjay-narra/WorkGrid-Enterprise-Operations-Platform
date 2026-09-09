export function generateSupportCsatAuditLogMock(id: string): Record<string, any> {
  return {
    id,
    domain: "support_csat",
    entity: "SupportCsatAuditLog",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
