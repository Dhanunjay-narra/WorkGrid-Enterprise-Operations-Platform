export function generateFinanceTreasuryRuleMock(id: string): Record<string, any> {
  return {
    id,
    domain: "finance_treasury",
    entity: "FinanceTreasuryRule",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
