export function generateFinanceBillsMetricMock(id: string): Record<string, any> {
  return {
    id,
    domain: "finance_bills",
    entity: "FinanceBillsMetric",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
