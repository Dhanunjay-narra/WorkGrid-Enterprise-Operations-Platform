export function generateFinanceTaxesPolicyMock(id: string): Record<string, any> {
  return {
    id,
    domain: "finance_taxes",
    entity: "FinanceTaxesPolicy",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
