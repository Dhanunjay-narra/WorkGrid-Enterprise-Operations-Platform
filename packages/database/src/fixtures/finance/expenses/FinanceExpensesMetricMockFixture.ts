export function generateFinanceExpensesMetricMock(id: string): Record<string, any> {
  return {
    id,
    domain: "finance_expenses",
    entity: "FinanceExpensesMetric",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
