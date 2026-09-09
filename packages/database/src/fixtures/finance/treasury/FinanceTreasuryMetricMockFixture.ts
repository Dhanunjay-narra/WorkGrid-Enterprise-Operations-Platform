export function generateFinanceTreasuryMetricMock(id: string): Record<string, any> {
  return {
    id,
    domain: "finance_treasury",
    entity: "FinanceTreasuryMetric",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
