export function generateFinanceBankingEventMock(id: string): Record<string, any> {
  return {
    id,
    domain: "finance_banking",
    entity: "FinanceBankingEvent",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
