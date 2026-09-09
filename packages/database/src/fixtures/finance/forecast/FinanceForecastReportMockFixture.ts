export function generateFinanceForecastReportMock(id: string): Record<string, any> {
  return {
    id,
    domain: "finance_forecast",
    entity: "FinanceForecastReport",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
