export function generateFinanceExpensesReportMock(id: string): Record<string, any> {
  return {
    id,
    domain: "finance_expenses",
    entity: "FinanceExpensesReport",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
