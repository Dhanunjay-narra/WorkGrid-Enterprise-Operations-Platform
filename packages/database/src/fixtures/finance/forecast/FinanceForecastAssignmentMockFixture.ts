export function generateFinanceForecastAssignmentMock(id: string): Record<string, any> {
  return {
    id,
    domain: "finance_forecast",
    entity: "FinanceForecastAssignment",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
