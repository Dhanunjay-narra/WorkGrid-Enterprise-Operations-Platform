export function generateFinanceLedgerMappingMock(id: string): Record<string, any> {
  return {
    id,
    domain: "finance_ledger",
    entity: "FinanceLedgerMapping",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
