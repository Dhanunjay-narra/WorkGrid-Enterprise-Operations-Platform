export function generateFinanceExpensesAuditLogMock(id: string): Record<string, any> {
  return {
    id,
    domain: "finance_expenses",
    entity: "FinanceExpensesAuditLog",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
