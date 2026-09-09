export function generateFinanceLedgerAssignmentMock(id: string): Record<string, any> {
  return {
    id,
    domain: "finance_ledger",
    entity: "FinanceLedgerAssignment",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
