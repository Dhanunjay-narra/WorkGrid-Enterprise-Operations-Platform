export function generateFinanceBankingPayloadMock(id: string): Record<string, any> {
  return {
    id,
    domain: "finance_banking",
    entity: "FinanceBankingPayload",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
