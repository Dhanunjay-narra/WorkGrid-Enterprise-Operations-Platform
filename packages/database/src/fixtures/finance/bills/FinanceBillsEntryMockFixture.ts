export function generateFinanceBillsEntryMock(id: string): Record<string, any> {
  return {
    id,
    domain: "finance_bills",
    entity: "FinanceBillsEntry",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
