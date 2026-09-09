export function generateFinanceForecastEntryMock(id: string): Record<string, any> {
  return {
    id,
    domain: "finance_forecast",
    entity: "FinanceForecastEntry",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
