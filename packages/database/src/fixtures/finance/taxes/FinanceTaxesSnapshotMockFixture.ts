export function generateFinanceTaxesSnapshotMock(id: string): Record<string, any> {
  return {
    id,
    domain: "finance_taxes",
    entity: "FinanceTaxesSnapshot",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
