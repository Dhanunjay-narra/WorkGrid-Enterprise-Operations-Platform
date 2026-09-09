export function generateFinanceExpensesQueueMock(id: string): Record<string, any> {
  return {
    id,
    domain: "finance_expenses",
    entity: "FinanceExpensesQueue",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
