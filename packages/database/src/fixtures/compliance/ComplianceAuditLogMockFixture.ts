export function generateComplianceAuditLogMock(id: string): Record<string, any> {
  return {
    id,
    domain: "compliance",
    entity: "ComplianceAuditLog",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
