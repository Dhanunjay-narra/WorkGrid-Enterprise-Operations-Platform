export function generateBiForecastsQueueMock(id: string): Record<string, any> {
  return {
    id,
    domain: "bi_forecasts",
    entity: "BiForecastsQueue",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
