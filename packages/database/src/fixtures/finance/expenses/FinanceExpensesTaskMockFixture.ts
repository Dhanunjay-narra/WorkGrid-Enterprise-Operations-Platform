export function generateFinanceExpensesTaskMock(id: string): Record<string, any> {
  return {
    id,
    domain: "finance_expenses",
    entity: "FinanceExpensesTask",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
