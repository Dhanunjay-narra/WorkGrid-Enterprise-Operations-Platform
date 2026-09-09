export function generateFinanceTaxesProfileMock(id: string): Record<string, any> {
  return {
    id,
    domain: "finance_taxes",
    entity: "FinanceTaxesProfile",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
