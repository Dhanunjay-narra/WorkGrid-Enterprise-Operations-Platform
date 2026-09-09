export function generateFinanceBankingReportMock(id: string): Record<string, any> {
  return {
    id,
    domain: "finance_banking",
    entity: "FinanceBankingReport",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
