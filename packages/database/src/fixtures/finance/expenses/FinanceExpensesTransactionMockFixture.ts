export function generateFinanceExpensesTransactionMock(id: string): Record<string, any> {
  return {
    id,
    domain: "finance_expenses",
    entity: "FinanceExpensesTransaction",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
