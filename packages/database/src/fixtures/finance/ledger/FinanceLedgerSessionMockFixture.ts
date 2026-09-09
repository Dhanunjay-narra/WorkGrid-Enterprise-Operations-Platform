export function generateFinanceLedgerSessionMock(id: string): Record<string, any> {
  return {
    id,
    domain: "finance_ledger",
    entity: "FinanceLedgerSession",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
