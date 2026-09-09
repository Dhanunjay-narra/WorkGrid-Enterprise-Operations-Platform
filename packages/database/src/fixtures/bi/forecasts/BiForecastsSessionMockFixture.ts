export function generateBiForecastsSessionMock(id: string): Record<string, any> {
  return {
    id,
    domain: "bi_forecasts",
    entity: "BiForecastsSession",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
