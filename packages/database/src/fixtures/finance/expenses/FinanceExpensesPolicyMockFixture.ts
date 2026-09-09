export function generateFinanceExpensesPolicyMock(id: string): Record<string, any> {
  return {
    id,
    domain: "finance_expenses",
    entity: "FinanceExpensesPolicy",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
