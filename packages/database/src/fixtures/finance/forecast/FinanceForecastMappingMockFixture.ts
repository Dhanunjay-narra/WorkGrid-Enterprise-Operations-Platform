export function generateFinanceForecastMappingMock(id: string): Record<string, any> {
  return {
    id,
    domain: "finance_forecast",
    entity: "FinanceForecastMapping",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
