export function generateFinanceTreasuryQueueMock(id: string): Record<string, any> {
  return {
    id,
    domain: "finance_treasury",
    entity: "FinanceTreasuryQueue",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
