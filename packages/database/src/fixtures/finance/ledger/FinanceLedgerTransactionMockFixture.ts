export function generateFinanceLedgerTransactionMock(id: string): Record<string, any> {
  return {
    id,
    domain: "finance_ledger",
    entity: "FinanceLedgerTransaction",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
