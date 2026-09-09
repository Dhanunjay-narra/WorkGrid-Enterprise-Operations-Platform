export function generateFinanceLedgerEventMock(id: string): Record<string, any> {
  return {
    id,
    domain: "finance_ledger",
    entity: "FinanceLedgerEvent",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
