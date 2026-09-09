export function generateFinanceForecastThresholdMock(id: string): Record<string, any> {
  return {
    id,
    domain: "finance_forecast",
    entity: "FinanceForecastThreshold",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
