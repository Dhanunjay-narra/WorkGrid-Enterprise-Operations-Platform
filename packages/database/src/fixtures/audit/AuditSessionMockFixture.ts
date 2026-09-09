export function generateAuditSessionMock(id: string): Record<string, any> {
  return {
    id,
    domain: "audit",
    entity: "AuditSession",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
