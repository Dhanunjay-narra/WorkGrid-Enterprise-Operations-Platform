export function generateFinanceLedgerQueueMock(id: string): Record<string, any> {
  return {
    id,
    domain: "finance_ledger",
    entity: "FinanceLedgerQueue",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
