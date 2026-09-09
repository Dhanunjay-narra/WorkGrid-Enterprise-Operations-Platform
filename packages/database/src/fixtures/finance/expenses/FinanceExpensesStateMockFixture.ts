export function generateFinanceExpensesStateMock(id: string): Record<string, any> {
  return {
    id,
    domain: "finance_expenses",
    entity: "FinanceExpensesState",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
