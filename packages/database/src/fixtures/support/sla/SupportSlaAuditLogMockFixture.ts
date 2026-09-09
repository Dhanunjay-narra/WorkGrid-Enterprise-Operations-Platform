export function generateSupportSlaAuditLogMock(id: string): Record<string, any> {
  return {
    id,
    domain: "support_sla",
    entity: "SupportSlaAuditLog",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
