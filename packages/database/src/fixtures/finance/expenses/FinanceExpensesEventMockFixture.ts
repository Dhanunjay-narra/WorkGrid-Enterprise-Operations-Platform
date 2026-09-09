export function generateFinanceExpensesEventMock(id: string): Record<string, any> {
  return {
    id,
    domain: "finance_expenses",
    entity: "FinanceExpensesEvent",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
