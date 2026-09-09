export function generateFinanceTreasurySessionMock(id: string): Record<string, any> {
  return {
    id,
    domain: "finance_treasury",
    entity: "FinanceTreasurySession",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
