export function generateFinanceExpensesRuleMock(id: string): Record<string, any> {
  return {
    id,
    domain: "finance_expenses",
    entity: "FinanceExpensesRule",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
