export function generateFinanceLedgerThresholdMock(id: string): Record<string, any> {
  return {
    id,
    domain: "finance_ledger",
    entity: "FinanceLedgerThreshold",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
