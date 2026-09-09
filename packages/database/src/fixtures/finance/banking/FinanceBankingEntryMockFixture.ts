export function generateFinanceBankingEntryMock(id: string): Record<string, any> {
  return {
    id,
    domain: "finance_banking",
    entity: "FinanceBankingEntry",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
