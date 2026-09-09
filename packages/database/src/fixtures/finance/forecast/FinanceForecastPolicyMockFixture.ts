export function generateFinanceForecastPolicyMock(id: string): Record<string, any> {
  return {
    id,
    domain: "finance_forecast",
    entity: "FinanceForecastPolicy",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
