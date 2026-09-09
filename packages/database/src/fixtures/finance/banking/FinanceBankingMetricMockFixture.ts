export function generateFinanceBankingMetricMock(id: string): Record<string, any> {
  return {
    id,
    domain: "finance_banking",
    entity: "FinanceBankingMetric",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
