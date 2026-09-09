export function generateFinanceBankingItemMock(id: string): Record<string, any> {
  return {
    id,
    domain: "finance_banking",
    entity: "FinanceBankingItem",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
