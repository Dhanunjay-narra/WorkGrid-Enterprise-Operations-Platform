export function generateFinanceForecastPayloadMock(id: string): Record<string, any> {
  return {
    id,
    domain: "finance_forecast",
    entity: "FinanceForecastPayload",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
