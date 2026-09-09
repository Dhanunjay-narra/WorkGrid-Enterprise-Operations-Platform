export function generateFinanceForecastStateMock(id: string): Record<string, any> {
  return {
    id,
    domain: "finance_forecast",
    entity: "FinanceForecastState",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
