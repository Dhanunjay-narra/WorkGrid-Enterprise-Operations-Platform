export function generateFinanceLedgerEntryMock(id: string): Record<string, any> {
  return {
    id,
    domain: "finance_ledger",
    entity: "FinanceLedgerEntry",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
