export function generateFinanceForecastScheduleMock(id: string): Record<string, any> {
  return {
    id,
    domain: "finance_forecast",
    entity: "FinanceForecastSchedule",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
