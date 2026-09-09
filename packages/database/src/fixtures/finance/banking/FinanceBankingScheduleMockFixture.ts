export function generateFinanceBankingScheduleMock(id: string): Record<string, any> {
  return {
    id,
    domain: "finance_banking",
    entity: "FinanceBankingSchedule",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
