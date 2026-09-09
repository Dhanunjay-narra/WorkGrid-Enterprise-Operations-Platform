export function generateFinanceTreasuryStateMock(id: string): Record<string, any> {
  return {
    id,
    domain: "finance_treasury",
    entity: "FinanceTreasuryState",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
