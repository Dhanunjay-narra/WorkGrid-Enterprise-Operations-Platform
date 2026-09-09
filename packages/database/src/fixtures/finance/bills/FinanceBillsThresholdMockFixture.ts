export function generateFinanceBillsThresholdMock(id: string): Record<string, any> {
  return {
    id,
    domain: "finance_bills",
    entity: "FinanceBillsThreshold",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
