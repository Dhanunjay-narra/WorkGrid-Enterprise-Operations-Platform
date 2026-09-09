export function generateFinanceTaxesRuleMock(id: string): Record<string, any> {
  return {
    id,
    domain: "finance_taxes",
    entity: "FinanceTaxesRule",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
