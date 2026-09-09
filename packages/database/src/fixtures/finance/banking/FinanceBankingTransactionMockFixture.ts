export function generateFinanceBankingTransactionMock(id: string): Record<string, any> {
  return {
    id,
    domain: "finance_banking",
    entity: "FinanceBankingTransaction",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
