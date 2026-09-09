export function generateFinanceExpensesScheduleMock(id: string): Record<string, any> {
  return {
    id,
    domain: "finance_expenses",
    entity: "FinanceExpensesSchedule",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
