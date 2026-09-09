export function generateFinanceTreasuryEntryMock(id: string): Record<string, any> {
  return {
    id,
    domain: "finance_treasury",
    entity: "FinanceTreasuryEntry",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
