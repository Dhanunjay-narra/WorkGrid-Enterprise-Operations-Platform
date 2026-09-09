export function generateFinanceBankingTaskMock(id: string): Record<string, any> {
  return {
    id,
    domain: "finance_banking",
    entity: "FinanceBankingTask",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
