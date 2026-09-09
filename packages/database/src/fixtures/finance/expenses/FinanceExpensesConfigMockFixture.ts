export function generateFinanceExpensesConfigMock(id: string): Record<string, any> {
  return {
    id,
    domain: "finance_expenses",
    entity: "FinanceExpensesConfig",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
