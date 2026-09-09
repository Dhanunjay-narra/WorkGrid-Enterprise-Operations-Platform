export function generateFinanceForecastNodeMock(id: string): Record<string, any> {
  return {
    id,
    domain: "finance_forecast",
    entity: "FinanceForecastNode",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
