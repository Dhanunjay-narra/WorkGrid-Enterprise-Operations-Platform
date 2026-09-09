export function generateFinanceBankingStateMock(id: string): Record<string, any> {
  return {
    id,
    domain: "finance_banking",
    entity: "FinanceBankingState",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
