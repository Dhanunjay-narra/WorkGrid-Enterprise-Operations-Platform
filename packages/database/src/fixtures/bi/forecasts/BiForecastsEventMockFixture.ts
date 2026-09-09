export function generateBiForecastsEventMock(id: string): Record<string, any> {
  return {
    id,
    domain: "bi_forecasts",
    entity: "BiForecastsEvent",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
