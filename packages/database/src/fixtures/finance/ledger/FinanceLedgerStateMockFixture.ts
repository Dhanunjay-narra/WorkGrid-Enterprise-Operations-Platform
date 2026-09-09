export function generateFinanceLedgerStateMock(id: string): Record<string, any> {
  return {
    id,
    domain: "finance_ledger",
    entity: "FinanceLedgerState",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
