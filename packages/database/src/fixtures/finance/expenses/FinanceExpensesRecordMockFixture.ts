export function generateFinanceExpensesRecordMock(id: string): Record<string, any> {
  return {
    id,
    domain: "finance_expenses",
    entity: "FinanceExpensesRecord",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
