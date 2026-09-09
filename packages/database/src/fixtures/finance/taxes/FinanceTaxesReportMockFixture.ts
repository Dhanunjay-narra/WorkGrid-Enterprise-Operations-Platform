export function generateFinanceTaxesReportMock(id: string): Record<string, any> {
  return {
    id,
    domain: "finance_taxes",
    entity: "FinanceTaxesReport",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
