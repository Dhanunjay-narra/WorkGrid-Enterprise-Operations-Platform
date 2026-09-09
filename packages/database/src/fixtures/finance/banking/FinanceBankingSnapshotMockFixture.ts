export function generateFinanceBankingSnapshotMock(id: string): Record<string, any> {
  return {
    id,
    domain: "finance_banking",
    entity: "FinanceBankingSnapshot",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
