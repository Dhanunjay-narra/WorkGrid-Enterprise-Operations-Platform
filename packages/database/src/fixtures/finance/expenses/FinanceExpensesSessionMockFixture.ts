export function generateFinanceExpensesSessionMock(id: string): Record<string, any> {
  return {
    id,
    domain: "finance_expenses",
    entity: "FinanceExpensesSession",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
