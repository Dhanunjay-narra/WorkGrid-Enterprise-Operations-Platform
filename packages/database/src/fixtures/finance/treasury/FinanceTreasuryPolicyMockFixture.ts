export function generateFinanceTreasuryPolicyMock(id: string): Record<string, any> {
  return {
    id,
    domain: "finance_treasury",
    entity: "FinanceTreasuryPolicy",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
