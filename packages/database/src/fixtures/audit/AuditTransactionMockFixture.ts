export function generateAuditTransactionMock(id: string): Record<string, any> {
  return {
    id,
    domain: "audit",
    entity: "AuditTransaction",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
