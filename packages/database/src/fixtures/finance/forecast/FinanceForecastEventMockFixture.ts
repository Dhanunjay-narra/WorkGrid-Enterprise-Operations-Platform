export function generateFinanceForecastEventMock(id: string): Record<string, any> {
  return {
    id,
    domain: "finance_forecast",
    entity: "FinanceForecastEvent",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
