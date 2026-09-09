export function generateFinanceLedgerPayloadMock(id: string): Record<string, any> {
  return {
    id,
    domain: "finance_ledger",
    entity: "FinanceLedgerPayload",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
