export function generateFinanceTreasuryAuditLogMock(id: string): Record<string, any> {
  return {
    id,
    domain: "finance_treasury",
    entity: "FinanceTreasuryAuditLog",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
