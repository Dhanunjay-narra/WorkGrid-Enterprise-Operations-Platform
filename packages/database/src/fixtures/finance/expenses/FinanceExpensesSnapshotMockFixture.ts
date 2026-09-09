export function generateFinanceExpensesSnapshotMock(id: string): Record<string, any> {
  return {
    id,
    domain: "finance_expenses",
    entity: "FinanceExpensesSnapshot",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
