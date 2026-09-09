export function generateFinanceBillsSnapshotMock(id: string): Record<string, any> {
  return {
    id,
    domain: "finance_bills",
    entity: "FinanceBillsSnapshot",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
