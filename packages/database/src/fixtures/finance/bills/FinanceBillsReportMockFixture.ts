export function generateFinanceBillsReportMock(id: string): Record<string, any> {
  return {
    id,
    domain: "finance_bills",
    entity: "FinanceBillsReport",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
