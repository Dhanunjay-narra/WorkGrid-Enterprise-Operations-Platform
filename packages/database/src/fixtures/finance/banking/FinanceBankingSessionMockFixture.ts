export function generateFinanceBankingSessionMock(id: string): Record<string, any> {
  return {
    id,
    domain: "finance_banking",
    entity: "FinanceBankingSession",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
