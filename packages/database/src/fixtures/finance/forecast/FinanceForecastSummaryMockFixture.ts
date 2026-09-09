export function generateFinanceForecastSummaryMock(id: string): Record<string, any> {
  return {
    id,
    domain: "finance_forecast",
    entity: "FinanceForecastSummary",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
