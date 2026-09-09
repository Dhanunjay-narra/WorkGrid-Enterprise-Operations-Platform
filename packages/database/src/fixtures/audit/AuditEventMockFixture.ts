export function generateAuditEventMock(id: string): Record<string, any> {
  return {
    id,
    domain: "audit",
    entity: "AuditEvent",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
