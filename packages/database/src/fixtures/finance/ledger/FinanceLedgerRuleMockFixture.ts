export function generateFinanceLedgerRuleMock(id: string): Record<string, any> {
  return {
    id,
    domain: "finance_ledger",
    entity: "FinanceLedgerRule",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
