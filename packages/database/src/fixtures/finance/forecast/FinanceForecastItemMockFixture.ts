export function generateFinanceForecastItemMock(id: string): Record<string, any> {
  return {
    id,
    domain: "finance_forecast",
    entity: "FinanceForecastItem",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
