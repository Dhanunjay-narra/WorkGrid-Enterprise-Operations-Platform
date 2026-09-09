export function generateBiForecastsRuleMock(id: string): Record<string, any> {
  return {
    id,
    domain: "bi_forecasts",
    entity: "BiForecastsRule",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
