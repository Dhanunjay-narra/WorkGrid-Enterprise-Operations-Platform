export function generateFinanceLedgerReportMock(id: string): Record<string, any> {
  return {
    id,
    domain: "finance_ledger",
    entity: "FinanceLedgerReport",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
