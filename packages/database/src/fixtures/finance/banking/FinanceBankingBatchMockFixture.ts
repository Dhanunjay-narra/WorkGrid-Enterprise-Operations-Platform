export function generateFinanceBankingBatchMock(id: string): Record<string, any> {
  return {
    id,
    domain: "finance_banking",
    entity: "FinanceBankingBatch",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
