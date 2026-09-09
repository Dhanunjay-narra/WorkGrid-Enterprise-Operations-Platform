export function generateFinanceForecastQueueMock(id: string): Record<string, any> {
  return {
    id,
    domain: "finance_forecast",
    entity: "FinanceForecastQueue",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
