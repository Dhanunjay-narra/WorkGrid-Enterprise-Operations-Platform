export function generateAuditStateMock(id: string): Record<string, any> {
  return {
    id,
    domain: "audit",
    entity: "AuditState",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
