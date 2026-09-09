export function generateFinanceTaxesSummaryMock(id: string): Record<string, any> {
  return {
    id,
    domain: "finance_taxes",
    entity: "FinanceTaxesSummary",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
