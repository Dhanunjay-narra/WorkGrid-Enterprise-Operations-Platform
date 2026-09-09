export function generateBiForecastsTaskMock(id: string): Record<string, any> {
  return {
    id,
    domain: "bi_forecasts",
    entity: "BiForecastsTask",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
