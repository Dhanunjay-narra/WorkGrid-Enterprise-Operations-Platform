export function generateFinanceExpensesProfileMock(id: string): Record<string, any> {
  return {
    id,
    domain: "finance_expenses",
    entity: "FinanceExpensesProfile",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
