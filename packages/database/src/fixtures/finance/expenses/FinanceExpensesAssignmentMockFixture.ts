export function generateFinanceExpensesAssignmentMock(id: string): Record<string, any> {
  return {
    id,
    domain: "finance_expenses",
    entity: "FinanceExpensesAssignment",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
