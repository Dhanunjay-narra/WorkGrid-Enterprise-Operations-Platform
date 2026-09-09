export function generateFinanceTaxesBatchMock(id: string): Record<string, any> {
  return {
    id,
    domain: "finance_taxes",
    entity: "FinanceTaxesBatch",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
