export function generateFinanceExpensesThresholdMock(id: string): Record<string, any> {
  return {
    id,
    domain: "finance_expenses",
    entity: "FinanceExpensesThreshold",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
