export function generateFinanceExpensesMappingMock(id: string): Record<string, any> {
  return {
    id,
    domain: "finance_expenses",
    entity: "FinanceExpensesMapping",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
