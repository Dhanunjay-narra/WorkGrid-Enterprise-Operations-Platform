export function generateFinanceExpensesEntryMock(id: string): Record<string, any> {
  return {
    id,
    domain: "finance_expenses",
    entity: "FinanceExpensesEntry",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
