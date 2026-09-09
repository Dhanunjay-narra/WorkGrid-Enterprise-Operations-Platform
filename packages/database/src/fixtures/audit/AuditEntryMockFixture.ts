export function generateAuditEntryMock(id: string): Record<string, any> {
  return {
    id,
    domain: "audit",
    entity: "AuditEntry",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
