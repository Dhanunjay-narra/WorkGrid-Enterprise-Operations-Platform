export function generateFinanceForecastProfileMock(id: string): Record<string, any> {
  return {
    id,
    domain: "finance_forecast",
    entity: "FinanceForecastProfile",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
