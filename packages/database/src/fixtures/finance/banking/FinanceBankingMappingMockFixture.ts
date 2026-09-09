export function generateFinanceBankingMappingMock(id: string): Record<string, any> {
  return {
    id,
    domain: "finance_banking",
    entity: "FinanceBankingMapping",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
