export function generateFinanceLedgerNodeMock(id: string): Record<string, any> {
  return {
    id,
    domain: "finance_ledger",
    entity: "FinanceLedgerNode",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
