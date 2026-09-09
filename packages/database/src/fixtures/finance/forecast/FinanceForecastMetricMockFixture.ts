export function generateFinanceForecastMetricMock(id: string): Record<string, any> {
  return {
    id,
    domain: "finance_forecast",
    entity: "FinanceForecastMetric",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
