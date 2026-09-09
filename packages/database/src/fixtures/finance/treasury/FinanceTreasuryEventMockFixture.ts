export function generateFinanceTreasuryEventMock(id: string): Record<string, any> {
  return {
    id,
    domain: "finance_treasury",
    entity: "FinanceTreasuryEvent",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
