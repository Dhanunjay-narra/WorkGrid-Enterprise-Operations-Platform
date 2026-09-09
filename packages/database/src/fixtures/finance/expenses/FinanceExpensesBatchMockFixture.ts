export function generateFinanceExpensesBatchMock(id: string): Record<string, any> {
  return {
    id,
    domain: "finance_expenses",
    entity: "FinanceExpensesBatch",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
