export function generateFinanceBillsAuditLogMock(id: string): Record<string, any> {
  return {
    id,
    domain: "finance_bills",
    entity: "FinanceBillsAuditLog",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
