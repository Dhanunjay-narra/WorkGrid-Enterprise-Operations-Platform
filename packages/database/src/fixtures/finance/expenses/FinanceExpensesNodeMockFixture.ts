export function generateFinanceExpensesNodeMock(id: string): Record<string, any> {
  return {
    id,
    domain: "finance_expenses",
    entity: "FinanceExpensesNode",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
