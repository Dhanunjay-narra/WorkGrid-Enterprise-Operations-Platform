export function generateFinanceLedgerProfileMock(id: string): Record<string, any> {
  return {
    id,
    domain: "finance_ledger",
    entity: "FinanceLedgerProfile",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
