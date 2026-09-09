export function generateFinanceTreasurySnapshotMock(id: string): Record<string, any> {
  return {
    id,
    domain: "finance_treasury",
    entity: "FinanceTreasurySnapshot",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
