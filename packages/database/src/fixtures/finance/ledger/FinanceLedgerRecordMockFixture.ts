export function generateFinanceLedgerRecordMock(id: string): Record<string, any> {
  return {
    id,
    domain: "finance_ledger",
    entity: "FinanceLedgerRecord",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
