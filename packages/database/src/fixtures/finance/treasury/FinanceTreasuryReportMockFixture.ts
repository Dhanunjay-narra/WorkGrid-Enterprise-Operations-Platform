export function generateFinanceTreasuryReportMock(id: string): Record<string, any> {
  return {
    id,
    domain: "finance_treasury",
    entity: "FinanceTreasuryReport",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
