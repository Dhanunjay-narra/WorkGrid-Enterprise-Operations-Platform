export function generateAuditPolicyMock(id: string): Record<string, any> {
  return {
    id,
    domain: "audit",
    entity: "AuditPolicy",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
