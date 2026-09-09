export function generateFinanceForecastTransactionMock(id: string): Record<string, any> {
  return {
    id,
    domain: "finance_forecast",
    entity: "FinanceForecastTransaction",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
