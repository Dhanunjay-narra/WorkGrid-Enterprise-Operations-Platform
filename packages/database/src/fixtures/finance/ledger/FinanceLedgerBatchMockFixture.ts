export function generateFinanceLedgerBatchMock(id: string): Record<string, any> {
  return {
    id,
    domain: "finance_ledger",
    entity: "FinanceLedgerBatch",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
