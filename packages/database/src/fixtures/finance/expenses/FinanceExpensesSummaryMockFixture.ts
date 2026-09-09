export function generateFinanceExpensesSummaryMock(id: string): Record<string, any> {
  return {
    id,
    domain: "finance_expenses",
    entity: "FinanceExpensesSummary",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
