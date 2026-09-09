export function generateFinanceLedgerTaskMock(id: string): Record<string, any> {
  return {
    id,
    domain: "finance_ledger",
    entity: "FinanceLedgerTask",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
