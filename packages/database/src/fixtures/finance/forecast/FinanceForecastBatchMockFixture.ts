export function generateFinanceForecastBatchMock(id: string): Record<string, any> {
  return {
    id,
    domain: "finance_forecast",
    entity: "FinanceForecastBatch",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
