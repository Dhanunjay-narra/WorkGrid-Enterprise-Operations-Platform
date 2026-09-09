export function generateFinanceTreasuryThresholdMock(id: string): Record<string, any> {
  return {
    id,
    domain: "finance_treasury",
    entity: "FinanceTreasuryThreshold",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
