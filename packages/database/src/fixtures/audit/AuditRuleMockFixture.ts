export function generateAuditRuleMock(id: string): Record<string, any> {
  return {
    id,
    domain: "audit",
    entity: "AuditRule",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
