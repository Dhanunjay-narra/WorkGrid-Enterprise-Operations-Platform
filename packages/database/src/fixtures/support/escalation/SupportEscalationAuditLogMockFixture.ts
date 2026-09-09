export function generateSupportEscalationAuditLogMock(id: string): Record<string, any> {
  return {
    id,
    domain: "support_escalation",
    entity: "SupportEscalationAuditLog",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
