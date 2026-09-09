export function generateFinanceLedgerPolicyMock(id: string): Record<string, any> {
  return {
    id,
    domain: "finance_ledger",
    entity: "FinanceLedgerPolicy",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
