export function generateFinanceBankingNodeMock(id: string): Record<string, any> {
  return {
    id,
    domain: "finance_banking",
    entity: "FinanceBankingNode",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
