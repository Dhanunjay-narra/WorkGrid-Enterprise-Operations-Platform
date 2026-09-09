export function generateFinanceLedgerSnapshotMock(id: string): Record<string, any> {
  return {
    id,
    domain: "finance_ledger",
    entity: "FinanceLedgerSnapshot",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
