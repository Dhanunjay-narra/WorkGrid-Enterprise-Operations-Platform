export function generateFinanceForecastRecordMock(id: string): Record<string, any> {
  return {
    id,
    domain: "finance_forecast",
    entity: "FinanceForecastRecord",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
