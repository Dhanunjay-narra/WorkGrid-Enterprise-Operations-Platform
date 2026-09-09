export function generateFinanceBillsTransactionMock(id: string): Record<string, any> {
  return {
    id,
    domain: "finance_bills",
    entity: "FinanceBillsTransaction",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
