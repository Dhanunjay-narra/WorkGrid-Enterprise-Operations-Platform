export function generateFinanceForecastSessionMock(id: string): Record<string, any> {
  return {
    id,
    domain: "finance_forecast",
    entity: "FinanceForecastSession",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
