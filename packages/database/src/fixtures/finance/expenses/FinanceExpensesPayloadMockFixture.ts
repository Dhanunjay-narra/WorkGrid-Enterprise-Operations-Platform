export function generateFinanceExpensesPayloadMock(id: string): Record<string, any> {
  return {
    id,
    domain: "finance_expenses",
    entity: "FinanceExpensesPayload",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
