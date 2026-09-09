export function generateFinanceLedgerConfigMock(id: string): Record<string, any> {
  return {
    id,
    domain: "finance_ledger",
    entity: "FinanceLedgerConfig",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
