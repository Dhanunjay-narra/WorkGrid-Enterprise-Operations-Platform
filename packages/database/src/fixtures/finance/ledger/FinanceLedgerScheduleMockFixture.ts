export function generateFinanceLedgerScheduleMock(id: string): Record<string, any> {
  return {
    id,
    domain: "finance_ledger",
    entity: "FinanceLedgerSchedule",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
