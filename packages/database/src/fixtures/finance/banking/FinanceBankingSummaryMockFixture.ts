export function generateFinanceBankingSummaryMock(id: string): Record<string, any> {
  return {
    id,
    domain: "finance_banking",
    entity: "FinanceBankingSummary",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
