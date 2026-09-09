export function generateFinanceBankingQueueMock(id: string): Record<string, any> {
  return {
    id,
    domain: "finance_banking",
    entity: "FinanceBankingQueue",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
