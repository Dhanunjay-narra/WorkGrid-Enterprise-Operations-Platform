export function generateFinanceTaxesMappingMock(id: string): Record<string, any> {
  return {
    id,
    domain: "finance_taxes",
    entity: "FinanceTaxesMapping",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
