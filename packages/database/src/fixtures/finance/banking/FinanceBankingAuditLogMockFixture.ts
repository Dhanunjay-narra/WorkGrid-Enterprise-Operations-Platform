export function generateFinanceBankingAuditLogMock(id: string): Record<string, any> {
  return {
    id,
    domain: "finance_banking",
    entity: "FinanceBankingAuditLog",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
