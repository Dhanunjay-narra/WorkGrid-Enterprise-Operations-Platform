export function generateFinanceExpensesItemMock(id: string): Record<string, any> {
  return {
    id,
    domain: "finance_expenses",
    entity: "FinanceExpensesItem",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
