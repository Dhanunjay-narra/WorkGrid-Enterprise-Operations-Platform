export function generateFinanceBankingRuleMock(id: string): Record<string, any> {
  return {
    id,
    domain: "finance_banking",
    entity: "FinanceBankingRule",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
