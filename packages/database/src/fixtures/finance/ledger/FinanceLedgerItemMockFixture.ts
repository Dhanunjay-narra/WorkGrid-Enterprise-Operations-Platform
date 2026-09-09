export function generateFinanceLedgerItemMock(id: string): Record<string, any> {
  return {
    id,
    domain: "finance_ledger",
    entity: "FinanceLedgerItem",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
