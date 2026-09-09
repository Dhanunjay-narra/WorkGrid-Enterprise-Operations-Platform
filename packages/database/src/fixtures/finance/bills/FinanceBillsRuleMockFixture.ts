export function generateFinanceBillsRuleMock(id: string): Record<string, any> {
  return {
    id,
    domain: "finance_bills",
    entity: "FinanceBillsRule",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
