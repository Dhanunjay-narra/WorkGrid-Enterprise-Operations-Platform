export function generateFinanceBankingThresholdMock(id: string): Record<string, any> {
  return {
    id,
    domain: "finance_banking",
    entity: "FinanceBankingThreshold",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
