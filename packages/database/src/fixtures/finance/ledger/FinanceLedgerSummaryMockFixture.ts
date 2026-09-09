export function generateFinanceLedgerSummaryMock(id: string): Record<string, any> {
  return {
    id,
    domain: "finance_ledger",
    entity: "FinanceLedgerSummary",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
