export function generateFinanceForecastTaskMock(id: string): Record<string, any> {
  return {
    id,
    domain: "finance_forecast",
    entity: "FinanceForecastTask",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
