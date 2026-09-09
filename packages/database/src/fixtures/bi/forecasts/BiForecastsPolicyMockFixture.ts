export function generateBiForecastsPolicyMock(id: string): Record<string, any> {
  return {
    id,
    domain: "bi_forecasts",
    entity: "BiForecastsPolicy",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
