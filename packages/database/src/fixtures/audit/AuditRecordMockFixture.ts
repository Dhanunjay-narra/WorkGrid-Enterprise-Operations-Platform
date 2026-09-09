export function generateAuditRecordMock(id: string): Record<string, any> {
  return {
    id,
    domain: "audit",
    entity: "AuditRecord",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
