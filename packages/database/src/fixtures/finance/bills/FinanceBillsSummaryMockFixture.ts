export function generateFinanceBillsSummaryMock(id: string): Record<string, any> {
  return {
    id,
    domain: "finance_bills",
    entity: "FinanceBillsSummary",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
