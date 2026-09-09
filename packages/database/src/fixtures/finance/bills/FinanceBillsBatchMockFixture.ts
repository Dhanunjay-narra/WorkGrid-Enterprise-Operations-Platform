export function generateFinanceBillsBatchMock(id: string): Record<string, any> {
  return {
    id,
    domain: "finance_bills",
    entity: "FinanceBillsBatch",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
