export function generateFinanceTaxesMetricMock(id: string): Record<string, any> {
  return {
    id,
    domain: "finance_taxes",
    entity: "FinanceTaxesMetric",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
