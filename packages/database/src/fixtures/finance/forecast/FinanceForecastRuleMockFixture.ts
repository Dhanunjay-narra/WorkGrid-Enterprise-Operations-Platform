export function generateFinanceForecastRuleMock(id: string): Record<string, any> {
  return {
    id,
    domain: "finance_forecast",
    entity: "FinanceForecastRule",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
