export function generateFinanceBankingPolicyMock(id: string): Record<string, any> {
  return {
    id,
    domain: "finance_banking",
    entity: "FinanceBankingPolicy",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
