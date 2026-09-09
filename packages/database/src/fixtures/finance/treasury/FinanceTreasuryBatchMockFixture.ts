export function generateFinanceTreasuryBatchMock(id: string): Record<string, any> {
  return {
    id,
    domain: "finance_treasury",
    entity: "FinanceTreasuryBatch",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
