export function generateFinanceForecastConfigMock(id: string): Record<string, any> {
  return {
    id,
    domain: "finance_forecast",
    entity: "FinanceForecastConfig",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
